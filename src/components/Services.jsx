import React, { useState } from 'react';
import Design from '../image/tab-design.svg';
import Development from '../image/tab-development.svg';
import Marketing from '../image/marketing.svg';
import Migration from '../image/Migration.svg';
import Support from '../image/support.svg';
import ReDesign from '../image/redesign.svg';
import UiUxDesign from '../image/uiux.svg';
import WebsiteDesign from '../image/Website-Design-tab.png';
import WebDevlopment from '../image/Web-Development-tab.png';
import WebMarketing from '../image/Marketing-tab.png';
import WebMigration from '../image/Migration-tab.png';
import WebSupport from '../image/Support-tab.png';
import WebRedesign from '../image/Redesign-tab.png';
import WebUiux from '../image/UiUx-tab.png'

const Services = () => {
    const [activeTab, setActiveTab] = useState('design');

    const tabs = [
        { id: 'design', title: 'Design', img: Design, contentImg: WebsiteDesign, contentTitle: '01.Design', contentText: 'We provide Professional Website Design Service in India, tailored exclusively to accomplish all your web related business challenges such as Building E-Commerce Website, Custom Website Development, Web Apps or SaaS Products, etc.' },
        { id: 'development', title: 'Development', img: Development, contentImg: WebDevlopment, contentTitle: '02.Development', contentText: 'We are a quality-focused foremost web development company in USA, offering Custom Web Development, E-Commerce Development, CMS Development, as well as Web Design Services. Build your brand’s online presence with our affordable and scalable web development and designing solution.' },
        { id: 'marketing', title: 'Marketing', img: Marketing, contentImg: WebMarketing, contentTitle: '03.Marketing', contentText: 'We provide Digital Marketing Service in India, tailored exclusively to accomplish all your web related business challenges such as Building E-Commerce Website, Custom Website Development, Web Apps or SaaS Products, etc.' },
        { id: 'migration', title: 'Migration', img: Migration, contentImg: WebMigration, contentTitle: '04.Migration', contentText: 'We provide Website Migration and Upgrade Service in India, tailored exclusively to accomplish all your web related business challenges such as Building E-Commerce Website, Custom Website Development, Web Apps or SaaS Products, etc.' },
        { id: 'support', title: 'Support', img: Support, contentImg: WebSupport, contentTitle: '05.Maintenance', contentText: 'We provide Website Migration and Upgrade Service in India, tailored exclusively to accomplish all your web related business challenges such as Building E-Commerce Website, Custom Website Development, Web Apps or SaaS Products, etc.' },
        { id: 'redesign', title: 'Redesign', img: ReDesign, contentImg: WebRedesign, contentTitle: '06.ReDesign', contentText: 'We provide Creative Website Redesign Service in India, tailored exclusively to accomplish all your website redesign related business challenges such as Redesigning E-Commerce Website, Creative Website Redesigning, Web Apps or SaaS Products Redesigning services, etc.' },
        { id: 'uiuxdesign', title: 'Uidesign', img: UiUxDesign, contentImg: WebUiux, contentTitle: '07.Ui Design', contentText: 'We provide Professional Creative UI/UX Design Services & Solutions in India, tailored exclusively to accomplish all your web related business challenges such as Web App Design, Mobile Designs, Mockup design, WireFrame Design, etc.' },
    ];

    return (
        <>
            <section className="services-sec sec">
                <div className="container">
                    <div className="services-box">
                        <div className="upper-box">
                            <h2>Our Services</h2>
                            <p>We are a quality-focused web development company as well as a web designing company, who works to deliver scalable and affordable web solutions to our clients across the globe.</p>
                        </div>
                        {/* Tabs */}
                        <div className="tab-box">
                            <div className="upper-tab-box">
                                {tabs.map((tab) => (
                                    <div
                                        key={tab.id}
                                        className={`box ${activeTab === tab.id ? 'active' : ''}`}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        <img src={tab.img} alt={tab.title} />
                                        <p className="m-0">{tab.title}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="tab-content">
                                {tabs.map((tab) => (
                                    <div
                                        key={tab.id}
                                        className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                                        style={{ display: activeTab === tab.id ? 'block' : 'none' }}
                                    >
                                        <div className="row">
                                            <div className="col-6">
                                                <img src={tab.contentImg} alt={tab.title} />
                                            </div>
                                            <div className="col-6">
                                                <div className="tab-inner about-detail">
                                                    <h2>{tab.contentTitle}</h2>
                                                    <p>{tab.contentText}</p>
                                                    <button className='btn'>Read More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Tabs */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
