import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Goals() {
  useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true,     
        });
      }, []);


    const tab = [{id:1, prop1: "row  justify-content-center align-items-center ", prop2: "container mb-2", image: "/image/img/about.png", prop3: "img-fluid w-100",title:"who we are?" ,ani1:"fade-right", ani2:"fade-left",
        descrition1:"AI&Dev is a forward-thinking community of students, professionals, and innovators united by a shared passion for Artificial Intelligence, Machine Learning, and Software Development. We believe in the power of collaboration, the value of continuous learning, and the potential of technology to transform the world around us.",
        descrition2:"Our club was founded with a simple mission: to create a space where ideas become code, curiosity becomes knowledge, and passion leads to innovation. We welcome individuals from all backgrounds and skill levels from complete beginners eager to write their first line of code, to advanced developers experimenting with deep learning models and AI frameworks."},

    { id:2, prop1: "row justify-content-center align-items-center flex-row-reverse", prop2: "container mt-5", image: "/image/img/Capture21.PNG", prop3: "img-fluid w-30",title:"Our Goal",ani1:"fade-left", ani2:"fade-right",
        descrition1:"At AI&Dev, our goal is to inspire and empower individuals to explore the intersection of Artificial Intelligence and Software Development through hands-on learning, collaboration, and innovation. We aim to create a welcoming environment where members of all skill levels can build real-world projects, share ideas, and grow into confident, creative problem-solvers.",
        descrition2:"We believe that technology should be accessible, ethical, and impactful. That’s why we focus not just on technical skills, but also on community, mentorship, and responsible development. Our vision is to equip the next generation of developers and AI thinkers with the tools and the mindset to shape a better, smarter future." },
        
    { id:3, prop1: "row justify-content-center align-items-center", prop2: "container mt-5", image: "/image/img/innov2.png", prop3: "img-fluid w-100" ,title:"What We Look for in Our Members",ani1:"fade-right", ani2:"fade-left",
        descrition1:"At AI&Dev, we’re not looking for perfect resumes or expert coders we’re looking for curious minds and collaborative spirits. Whether you're just starting out or already deep into development or AI, what matters most to us is your willingness to learn, share, and grow with others. Passion, persistence, and a genuine interest in technology go a long way in our community.",
        descrition2:"At AI&Dev, we’re not looking for perfect resumes or expert coders we’re looking for curious minds and collaborative spirits. Whether you're just starting out or already deep into development or AI, what matters most to us is your willingness to learn, share, and grow with others. Passion, persistence, and a genuine interest in technology go a long way in our community."}
    ]


    return (
        <section className="py-5 text-dark overflow-hidden" id="about" >
            {tab.map(v => {
                return (
                    <div key={v.id} className={v.prop2} >
                        <div className={v.prop1} >
                            <div className="col-md"data-aos={v.ani1}>
                                <img src={v.image} alt="" className={v.prop3} />
                            </div>
                            <div className="col-md" >
                                <h2 className="fw-bold text-body-emphasis" data-aos={v.ani2}>{v.title}</h2>
                                <p className="lead " data-aos={v.ani2} data-aos-delay="100">
                                    {v.descrition1}  
                                </p> 
                                <p className="lead " data-aos={v.ani2} data-aos-delay="100">
                                    {v.descrition2}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}

        </section>
    )
}

export default Goals


