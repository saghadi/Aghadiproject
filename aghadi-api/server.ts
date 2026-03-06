// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ====== MySQL connection pool ======
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "aghadi_site",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Simple helper to test connection at startup
(async () => {
  try {
    const conn = await pool.getConnection();
    console.log("MySQL connected");
    conn.release();
  } catch (err) {
    console.error("MySQL connection error:", err);
  }
})();

// ====== Routes ======

// POST /api/contact – save form
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, services, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required",
      });
    }

    // store services as JSON string (or you can use services.join(', '))
    const servicesValue = Array.isArray(services)
      ? JSON.stringify(services)
      : "[]";

    const sql =
      "INSERT INTO contacts (name, email, phone, services, message) VALUES (?, ?, ?, ?, ?)";
    const params = [name, email, phone || "", servicesValue, message || ""];

    const [result] = await pool.query(sql, params);

    return res.json({
      success: true,
      data: {
        id: result.insertId,
        name,
        email,
        phone,
        services: services,
        message,
      },
    });
  } catch (err) {
    console.error("POST /api/contact error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// GET /api/contact – list all submissions
app.get("/api/contact", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, name, email, phone, services, message, created_at FROM contacts ORDER BY created_at DESC"
    );

    // optional: parse services JSON back to array
    const parsed = rows.map((row) => ({
      ...row,
      services: (() => {
        try {
          return row.services ? JSON.parse(row.services) : [];
        } catch {
          return [];
        }
      })(),
    }));

    return res.json({
      success: true,
      data: parsed,
    });
  } catch (err) {
    console.error("GET /api/contact error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// ====== Start server ======
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
