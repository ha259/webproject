import { Link } from "react-router-dom"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'


function Section3() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,

        });
    }, []);



    const tab = [{ id:1,title: "Focus on both AI and Web Dev", description: "Build real projects at the intersection of AI and web development with a supportive, hands-on community." },
    { id:2,title: "Hands-on mentorship", description: "Learn AI and web dev through real projects and hands-on mentorship in a community that builds together" },
    { id:3,title: "Access to real-world projects", description: "Get hands-on mentorship, build real-world AI and web dev projects, and grow with a driven community." },
    { id:4,title: "Support for total beginners!", description: "Beginner-friendly, hands-on mentorship, and real-world AI + web dev projects , all in one supportive community." }
    ]

    return (
        <>
            <div className="container px-4 py-5">
                <h2 className="pb-2 border-bottom" data-aos="fade-up">What Makes Us Unique</h2>
                <div className="row row-cols-1 row-cols-md-2 align-items-md-center  g-md-5 g-4 py-5 overflow-x-hidden" >
                    <div className="col d-flex flex-column align-items-start  gap-2">
                        <h2 className="fw-bold text-body-emphasis"data-aos="fade-right">Why should someone join <span className="text-info">AI&DEV</span> instead of another club?</h2>
                        <p className="text-body-secondary" data-aos="fade-right">AI & Dev combines the power of artificial intelligence with real-world development. Unlike other clubs, we don’t just talk about tech,we build with it. You’ll get hands-on experience, collaborate on impactful projects, and join a community that’s passionate about creating the future.</p>
                        <Link to='/logging/createacount' className="btn btn-info btn-lg text-light" data-aos="fade-right" data-aos-delay="100">join now</Link>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 g-md-5 g-4 overflow-x-hidden" >
                        {tab.map(v => {
                            return (
                                <div key={v.id} className="col d-flex flex-column gap-2">
                                    <h4 className="fw-semibold text-body-emphasis"data-aos="fade-left">{v.title}</h4>
                                    <p className="text-body-secondary"data-aos="fade-left">{v.description}</p>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )

}

export default Section3


