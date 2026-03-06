import React, { useState } from 'react';
import Product from '../image/Product Companies.svg';
import Travel from '../image/Travel & Tourism.svg';
import Digital from '../image/Digital & Marketing Agencies.svg';
import Logistics from '../image/Logistics & Transportation.svg';
import Publishing from '../image/Publishing & Advertising.svg';
import Media from '../image/Media & Entertainment.svg';
import Banking from '../image/Banking & Finance.svg';
import Retail from '../image/Retail & E-Commerce.svg';
import Healthcare from '../image/Healthcare.svg';
import Education from '../image/Education & E-Learning.svg';
import Automotive from '../image/Automotive.svg';
import Technology from '../image/Technology.svg';

// Inner images
import Experience1 from '../image/experience-1.jpg'
import Experience11 from '../image/experience-1.1.jpg'
import Experience2 from '../image/experience-2.jpg'
import Experience22 from '../image/experience-2.2.jpg'
import Experience3 from '../image/experience-3.jpg'
import Experience33 from '../image/experience-3.3.jpg'
import Experience4 from '../image/experience-4.jpg'
import Experience44 from '../image/experience-4.4.jpg'
import Experience5 from '../image/experience-5.jpg'
import Experience55 from '../image/experience-5.5.jpg'
import Experience6 from '../image/experience-6.jpg'
import Experience66 from '../image/experience-6.6.jpg'
import Experience7 from '../image/experience-7.jpg'
import Experience77 from '../image/experience-7.7.jpg'
import Experience8 from '../image/experience-8.jpg'
import Experience88 from '../image/experience-8.8.jpg'
import Experience9 from '../image/experience-9.jpg'
import Experience99 from '../image/experience-9.9.jpg'
import Experience10 from '../image/experience-10.jpg'
import Experience10e from '../image/experience-10.1.jpg'
import Experience11ex from '../image/experience-11.jpg'
import Experience11e from '../image/experience-11.1.jpg'
import Experience12 from '../image/experience-12.jpg'
import Experience12e from '../image/experience-12.1.jpg'

const Exprience = () => {
    const [activeTab, setActiveTab] = useState('Product Companies');

    const tabs = [
        { id: 'Product Companies', title: 'Product Companies', images: [Experience1, Experience11], ProductImg: [Product] },
        { id: 'Travel & Tourism', title: 'Travel & Tourism', images: [Experience2, Experience22], ProductImg: [Travel] },
        { id: 'Digital & Marketing Agencies', title: 'Digital & Marketing Agencies', images: [Experience3, Experience33], ProductImg: [Digital] },
        { id: 'Logistics & Transportation', title: 'Logistics & Transportation', images: [Experience4, Experience44], ProductImg: [Logistics] },
        { id: 'Publishing & Advertising', title: 'Publishing & Advertising', images: [Experience5, Experience55], ProductImg: [Publishing] },
        { id: 'Media & Entertainment', title: 'Media & Entertainment', images: [Experience6, Experience66], ProductImg: [Media] },
        { id: 'Banking & Finance', title: 'Banking & Finance', images: [Experience7, Experience77], ProductImg: [Banking] },
        { id: 'Retail & E-Commerce', title: 'Retail & E-Commerce', images: [Experience8, Experience88], ProductImg: [Retail] },
        { id: 'Healthcare', title: 'Healthcare', images: [Experience9, Experience99], ProductImg: [Healthcare] },
        { id: 'Education & E-Learning', title: 'Education & E-Learning', images: [Experience10, Experience10e], ProductImg: [Education] },
        { id: 'Automotive', title: 'Automotive', images: [Experience11ex, Experience11e], ProductImg: [Automotive] },
        { id: 'Technology', title: 'Technology', images: [Experience12, Experience12e], ProductImg: [Technology] },
    ];

    const renderTabContent = () => {
        const currentTab = tabs.find(tab => tab.id === activeTab);
        if (!currentTab) return null;

        return (
            <div className="tab-inn active">
                <h3>{currentTab.title}</h3>
                <div className="row">
                    {currentTab.images.map((image, index) => (
                        <div className="col-6" key={index}>
                            <img src={image} alt={currentTab.title} />
                        </div>
                    ))}
                </div>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters.
                </p>
            </div>
        );
    };

    return (
        <>
            <section className="experience-sec sec">
                <div className="container">
                    <div className="upper-box">
                        <h2>Industry Experience</h2>
                        <p>We have served our services to more than 350+ customers from various industries across the globe.
                            We have dedicated industry expert teams that take care of all your requirements and deliver the best
                            results.
                        </p>
                    </div>
                    <div className="experience-main">
                        <div className="row">
                            <div className="col-4 upper-tab">
                                {tabs.map(tab => (
                                    <div
                                        key={tab.id}
                                        className={`box-main ${activeTab === tab.id ? 'active' : ''}`}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        <img src={tab.ProductImg} alt={tab.title} />
                                        <span>{tab.title}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="col-8 expericnce-tab">
                                {renderTabContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Exprience;
