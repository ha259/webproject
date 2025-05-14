import Footer from "../home/footer"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'



function Contactpage() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,

        });
    }, []);

    return (
        <>
            <div id="carouselExampleCaptions" className=" carousel slide " data-aos="fade-up">
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img src="/image/img/contactimg.png" className="d-block w-100" style={{ height: "250px" }} alt="..." />
                        <div className="carousel-caption   position-absolute top-50 start-50 translate-middle " >
                            <h1 className="fw-bolder display-3" >Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>

            <form className="container my-5">
                <div className="row g-md-5 g-2 ">
                    <div className="col-12 col-md-6 " data-aos="fade-up" data-aos-delay="100">
                        <h3 className="fw-semibold display-5 text-capitalize"  d>Get in touch</h3>
                        <p >Use our contact form for all information requests or contact us directly using the contact information below.</p><br />
                        <p >Feel free to get in touch with us via email or phone</p>
                        <hr className="w-75"/>
                        <h3 className="fw-semibold  text-capitalize"  >Contact Info</h3>
                        <div data-aos="fade-up" >
                            <a className="link-dark  link-underline-opacity-0" href="#"><img src="/image/img/telephone.png" alt="" width={"40px"} className="me-2" />123-456-7890</a></div>
                        <div className="mt-3" data-aos="fade-up">
                            <a className="link-dark  link-underline-opacity-0 " href="https://www.google.com/maps/place/%D9%83%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85+%D8%A7%D8%A8%D9%86+%D9%85%D8%B3%D9%8A%D9%83%E2%80%AD/@33.566615,-7.5389047,17z/data=!4m14!1m7!3m6!1s0xda633261bbe100f:0xe48b03dd8c6794a0!2z2YPZhNmK2Kkg2KfZhNi52YTZiNmFINin2KjZhiDZhdiz2YrZgw!8m2!3d33.5666106!4d-7.5414796!16s%2Fg%2F11fzpkjwyn!3m5!1s0xda633261bbe100f:0xe48b03dd8c6794a0!8m2!3d33.5666106!4d-7.5414796!16s%2Fg%2F11fzpkjwyn?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" target="_blank"><img src="/image/img/gps2.png" alt="" width={"40px"} className="me-2" />Faculty Of Science BenMSICK, FSBM</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 bg-light rounded-5 border border-2 border-info" data-aos="fade-up" data-aos-delay="100">
                        <div className="p-4">
                            <h2 className="text-center my-3">Get started with <span className="text-info">AI&DEV</span> </h2>
                            <div className="form-floating my-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Name" required />
                                <label for="floatingInput">Name</label>
                            </div>
                            <div className="form-floating mb-3 ">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" class="form-control" id="floatinginput" placeholder="subject" required />
                                <label for="floatinginput">Subject</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" placeholder="Leave a message here" id="floatingTextarea" style={{ height: "150px" }} required></textarea>
                                <label for="floatingTextarea">Message</label>
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" value="" id="checkDefault" required />
                                <label className="form-check-label" for="checkDefault">I accept the Terms of Service </label>
                            </div>
                            <div className="d-grid mb-3">
                                <button className="btn btn-info text-light" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>


            <Footer />

        </>
    )


}

export default Contactpage







