import Footer from "../home/footer"
import Section1 from "./section1"
import Section2 from "./section2"
import Section3 from "./section3"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
      useEffect(() => {
            AOS.init({
              duration: 1000, 
              once: true, 
                  
            });
          }, []);
    
    return (
        <>
            <div id="carouselExampleCaptions" className=" carousel slide mb-5 overflow-hidden" data-aos="fade-up">

                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img src="/image/img/aboutus1.png" class="d-block w-100" style={{ height: "300px" }} alt="..." />
                        <div className="carousel-caption  d-md-block position-absolute top-50 start-50 translate-middle " >
                            <h1 className="fw-bolder display-3" >About Us</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5 overflow-hidden">
                <h1 className="text-center text-capitalize mb-5" data-aos="fade-up">welcome to <span className="text-info">AI&DEV</span></h1>
                <div className="row justify-content-center flex-row-reverse align-items-center">
                    <div className="col-md" data-aos="fade-left">
                        <img src="/image/img/carousel-1.jpg" alt="" className="img-fluid w-30" />
                    </div>
                    <div className="col-md " >
                        <h2 className="display-6 fw-bold text-body-emphasis" data-aos="fade-right">What the Club Is</h2>
                        <p className="lead" data-aos="fade-right" data-aos-delay="200">
                            The AI & Dev Club is a student-driven community focused on artificial intelligence, software development, and modern tech. We bring together curious minds to explore, learn, and build with code. From hands-on workshops and coding sessions to real-world projects and tech talks, we create a space where members of all skill levels can grow and collaborate. Whether you're new to tech or already developing AI models, this club is your place to connect, create, and innovate.
                        </p>
                    </div>
                </div>
            </div>
            <Section1/>
            <Section2/>
            <Section3/>
            <Footer />
        </>
    )

}

export default About








