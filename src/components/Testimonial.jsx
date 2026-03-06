import React from 'react'
import UserImg from '../image/user-img.jpg'
import UserImg1 from '../image/user-img-2.jpg'
import UserImg2 from '../image/user-img-3.jpg'
import UserImg3 from '../image/user-img-4.jpg'
import Quote from '../image/quote.png'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = () => {
    return (
        <>
            <section className="testimonial-sec sec">
                <div className="container">
                    <div className="textimonial-inn">
                        <h2 className='text-center mb-5'>Client’s Feedback</h2>
                        <div className="row">
                            <div className="col-1 col-md-3">
                                <div className="testimonial-img">
                                    <div className="img"><img src={UserImg} alt="" /></div>
                                    <div className="img"><img src={UserImg1} alt="" /></div>
                                    <div className="img"><img src={UserImg2} alt="" /></div>
                                </div>
                            </div>
                            <div className="col-10 col-md-6">
                                <div className="client-review text-center mt-4">
                                    <img src={Quote} alt="" />
                                    <Swiper
                                        modules={[]}
                                        loop={true}
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        onSwiper={(swiper) => (swiper)}
                                    >
                                        <SwiperSlide>
                                            <p>
                                                I can't express how grateful I am to Trident for their exceptional services. Their team not
                                                only found the perfect role that matched my skills and ambitions but also guided me
                                                through the entire hiring process. Thanks to their dedication, I've landed my dream job
                                                and am now thriving in my career
                                            </p>
                                            <img src={UserImg} alt="" />
                                            <h4>Sarah L.</h4>
                                            <span>Senior Marketing Manager</span>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <p>
                                                I can't express how grateful I am to Trident for their exceptional services. Their team not
                                                only found the perfect role that matched my skills and ambitions but also guided me
                                                through the entire hiring process. Thanks to their dedication, I've landed my dream job
                                                and am now thriving in my career
                                            </p>
                                            <img src={UserImg1} alt="" />
                                            <h4>Sarah L.</h4>
                                            <span>Senior Marketing Manager</span>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <p>
                                                I can't express how grateful I am to Trident for their exceptional services. Their team not
                                                only found the perfect role that matched my skills and ambitions but also guided me
                                                through the entire hiring process. Thanks to their dedication, I've landed my dream job
                                                and am now thriving in my career
                                            </p>
                                            <img src={UserImg2} alt="" />
                                            <h4>Sarah L.</h4>
                                            <span>Senior Marketing Manager</span>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <p>
                                                I can't express how grateful I am to Trident for their exceptional services. Their team not
                                                only found the perfect role that matched my skills and ambitions but also guided me
                                                through the entire hiring process. Thanks to their dedication, I've landed my dream job
                                                and am now thriving in my career
                                            </p>
                                            <img src={UserImg3} alt="" />
                                            <h4>Sarah L.</h4>
                                            <span>Senior Marketing Manager</span>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="col-1 col-md-3">
                                <div className="testimonial-img second-img">
                                    <div className="img"><img src={UserImg3} alt="" /></div>
                                    <div className="img"><img src={UserImg} alt="" /></div>
                                    <div className="img"><img src={UserImg2} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial