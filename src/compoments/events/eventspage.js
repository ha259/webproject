import Events from "./events"
import Category from "./category"
import Footer from "../home/footer"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'


function Eventpage() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,

        });
    }, []);

    return (
        <>
            <div id="carouselExampleCaptions" className=" carousel slide" data-aos="fade-up">
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img src="/image/img/event4.png" className="d-block w-100" style={{ height: "350px" }} alt="..." />
                        <div className="carousel-caption  d-md-block position-absolute top-50 start-50 translate-middle " >
                            <h1 className="fw-bolder display-3" >Events</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 text-center " >
                <div className="container ">
                    <h1 className="text-body-emphasis" data-aos="fade-up" data-aos-delay="100">Learn. Build. Connect. Our Events Bring Ideas to Life!</h1>
                    <p className="col-lg-8 mx-auto lead" data-aos="fade-up" data-aos-delay="100">
                        At Club AI & Dev, we host a wide range of events throughout the year from beginner-friendly workshops to advanced hackathons. Whether you're looking to learn a new skill, work on real projects, or meet others passionate about technology, there's something for everyone.
                    </p>
                </div>
            </div>

            <div >
                <Events />
                <Category />
            </div>
            <Footer />




        </>
    )

}

export default Eventpage