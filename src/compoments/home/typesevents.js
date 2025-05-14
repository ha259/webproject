import { Link } from "react-router-dom"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Typevents() {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true,     
        });
      }, []);


    return (
        <>
            <div className="container px-4 py-5 overflow-hidden">
                <h2 className="pb-2 border-bottom" data-aos="fade-up">Discover <span className="text-info">AI&DEV</span> Events</h2>

                <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5" >
                    <div className="col d-flex flex-column align-items-start gap-2">
                        <h2 className="fw-bold text-body-emphasis" data-aos="fade-right">Types of Events</h2>
                        <p className="text-body-secondary" data-aos="fade-right" >Our events include hands-on workshops, exciting hackathons, expert-led speaker series, casual networking meetups, and project showcases to foster learning, creativity, and collaboration in AI and development.</p>
                        <Link to="*" className="btn btn-info btn-lg text-light"  data-aos="fade-right" data-aos-dalay="100">learn more</Link>
                    </div>
                    
                    <div className="col" >
                        <div className="row row-cols-1 row-cols-sm-2 g-4">
                            <div className="col d-flex flex-column gap-2" >                           
                                <h4 className="fw-semibold mb-0 text-body-emphasis"data-aos="fade-left">Workshops</h4>
                                <p className="text-body-secondary"data-aos="fade-left" data-aos-delay="100">Hands-on sessions covering AI, machine learning, coding, app development, and more. No experience needed!.</p>
                            </div>
                            <div className="col d-flex flex-column gap-2" >                             
                                <h4 className="fw-semibold mb-0 text-body-emphasis" data-aos="fade-left">Hackathons</h4>
                                <p className="text-body-secondary" data-aos="fade-left" data-aos-delay="100">Team up, build something awesome in a short time, and compete for prizes!</p>
                            </div>
                            <div className="col d-flex flex-column gap-2">         
                                <h4 className="fw-semibold mb-0 text-body-emphasis" data-aos="fade-left">Speaker Series</h4>
                                <p className="text-body-secondary" data-aos="fade-left" data-aos-delay="100">Hear from experts in AI, startups, and software development about real-world experiences and industry trends.</p>
                            </div>
                            <div className="col d-flex flex-column gap-2" >
                                <h4 className="fw-semibold mb-0 text-body-emphasis"data-aos="fade-left">Networking </h4>
                                <p className="text-body-secondary" data-aos="fade-left" data-aos-delay="100">Meet recruiters, tech professionals, and startup founders. Get advice on jobs, internships, and career paths in tech.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Typevents