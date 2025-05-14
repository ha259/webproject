import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";

function Section2() {
    
          useEffect(() => {
                    AOS.init({
                      duration: 1000, 
                      once: true, 
                          
                    });
                  }, []);
    

    return (
        <>
            <div className="container col-xxl-8 px-4 ">
                <div className="row  flex-lg-row align-items-center g-md-5 gy-3 overflow-x-hidden">
                    <div className="col-10 col-sm-8 col-lg-6 " data-aos="fade-right">
                        <img src="/image/img/innov.jpg" className="d-block mx-lg-auto img-fluid " alt="" width="700" height="500" loading="lazy"/>
                    </div>
                    <div className="col-lg-6 " >
                        <h1 className="display-6 fw-bold text-body-emphasis lh-1 mb-3 "data-aos="fade-left">How We Work </h1>
                        <p className="lead" data-aos="fade-left" data-aos-delay="200">We build responsive, AI-powered web apps using modern tools like Bootstrap. With scalable design, interactive components, and smart development practices, we turn ideas into real, working solutions fast</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start" data-aos="fade-left" data-aos-delay="200">
                            <Link to="*" type="button" className="btn btn-outline-primary btn-lg px-4 me-md-2">read more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}


export default Section2