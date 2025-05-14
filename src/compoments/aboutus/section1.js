import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';


function Section1() {

      useEffect(() => {
                AOS.init({
                  duration: 1000, 
                  once: true,
               
                      
                });
              }, []);

    return (
        <>
            <div className="container px-4 py-5" id="featured-3">
                <h2 className="pb-2 border-bottom" data-aos="fade-up">Discover, Build, and Grow with <span className="text-info">AI&DEV</span></h2>
                <div className="row g-md-5 gy-4 overflow-hidden  py-5 row-cols-1 row-cols-lg-4" >
                    <div className="col" data-aos="fade-up" >
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
                            <img src="/image/img/vision.png" alt="" />
                        </div>
                        <h3 className=" text-body-emphasis"><span className="fs-2 fw-bolder text-info">1</span> Vision</h3>
                        <p>We’re a passionate group of students exploring the world of artificial intelligence and software development. Our goal is to build a supportive space where curiosity, creativity, and code come together.</p>

                    </div>
                    <div className="col" data-aos="fade-up" data-aos-delay="200">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
                            <img src="/image/img/offer.png" alt="" />
                        </div>
                        <h3 className="text-body-emphasis"><span className="fs-2 fw-bolder text-info">2</span> What We Offer</h3>
                        <p>We empower members with the skills, tools, and guidance to grow as developers and innovators. Through hands-on projects, shared learning, and mentorship, we bring ideas to life with tech.</p>

                    </div>
                    <div className="col" data-aos="fade-up" data-aos-delay="300">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                            <img src="/image/img/who.png" alt="" />
                        </div>
                        <h3 className="text-body-emphasis"><span className="fs-2 fw-bolder text-info">3</span> Who It's For</h3>
                        <p>Whether you're into machine learning, web development, or just starting out, there's a place for you here. We offer workshops, hackathons, coding sessions, and talks with industry pros.</p>

                    </div>
                    <div className="col" data-aos="fade-up" data-aos-delay="400">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
                            <img src="/image/img/community.png" alt="" />
                        </div>
                        <h3 className=" text-body-emphasis"><span className="fs-2 fw-bolder text-info">4</span> Community Viber</h3>
                        <p>Join us to connect with like-minded peers, enhance your technical, and become part of a collaborative community driving the future of technology through innovation and learning</p>

                    </div>
                </div>
            </div>
        </>
    )

}


export default Section1