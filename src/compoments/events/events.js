import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";


function Cards(props) {

    return (

        <div className="card bg-dark text-light " style={{ width: "18rem", height: "100%" }}>
            <img src={props.photo} className="card-img-top w-100" style={{ height: "18rem" }} alt="..." />
            <div className="card-body ">
                <h5 className="card-title text-start">{props.title}</h5>
                <p className="text-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-check-fill" viewBox="0 0 16 16">
                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                    </svg> {props.day} - <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    </svg> {props.hour}
                </p>
                <p className="card-text text-start">{props.description}</p>
                <Link to="*" className="btn btn-primary">join now</Link>
            </div>
        </div>
    )
}

function Events() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,

        });
    }, []);


    return (
        <section className="mb-5" id="event">
            <h1 className="text-center mb-5" data-aos="fade-up"> Upcoming Events</h1>
            <div className="container-fluid text-center" >
                <div className="row gy-5 justify-content-center justify-content-md-between">
                    <div className="col-12 col-sm-8 col-md-6 col-lg-3 d-flex justify-content-center" data-aos="fade-up">
                        <Cards photo="/eventsph/next.png" title="Know more about AI" day="16/05/2025" hour="12:00" description="Know More About AI by AI&Dev Club a quick intro to AI, its uses, and future potential. Join us and get inspired!" />
                    </div>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-3 d-flex justify-content-center" data-aos="fade-up">
                        <Cards photo="/eventsph/opening.png" title="Integration day" day="19/09/2024" hour="10:00" description="Join the AI&Dev Club for Integration Day a fun event explore how different tech fields come together." />
                    </div>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-3 d-flex justify-content-center" data-aos="fade-up">
                        <Cards photo="/eventsph/softskills2.png" title="Python" day="09/10/2024" hour="09:30" description="Join the AI&Dev Club for Python Day a beginner-friendly event to explore Python programming and start building real projects." />
                    </div>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-3 d-flex justify-content-center " data-aos="fade-up">
                        <Cards photo="/eventsph/softskills1.png" title="workshop" day="27/09/2024" hour="13:00" description="Join the AI&Dev Club for a Scientific Poster Workshop learn how to design clear, effective, and professional research posters." />
                    </div>
                </div>
            </div>

        </section>
    )

}

export default Events