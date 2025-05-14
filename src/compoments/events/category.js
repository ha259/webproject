import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'

function Category() {
    
        useEffect(() => {
            AOS.init({
                duration: 1000,
                once: true,
    
            });
        }, []);

    const tab = [{id:1, prop1: "me-1", image: "/image/img/cat3.png",title:"Python",description:"Python is a simple and powerful language used in AI and development." },
    { id:2,prop1: "me-1", image: "/image/img/cat1.png",title:"Microsoft Excel",description:"Microsoft Excel is a powerful tool for data analysis, organization, and visualization." },
    { id:3,prop1: "me-1", image: "/image/img/cat2.png" ,title:"AWS",description:"AWS is a cloud platform that offers scalable computing, storage, and AI services."},
    { id:4,prop1: "me-1", image: "/image/img/cat4.png",title:"Java" ,description:"Java is a versatile language for web and mobile apps."},
    { id:5,prop1: "me-1", image: "/image/img/cat5.png",title:"Web Design" ,description:"Web design is the process of creating visually appealing and user-friendly websites."},
    { id:6,prop1: "me-1", image: "/image/img/cat6.png",title:"Web Development" ,description:"Web development is the creation of websites and web applications using coding languages and frameworks."},
    { id:7,prop1: "me-1 w-25", image: "/image/img/cat7.png",title:"MySQL",description:"MySQL is a popular open-source relational database management system used for storing and managing data." },
    { id:8,prop1: "me-1", image: "/image/img/cat8.png",title:"UI/UX Design" ,description:"UI/UX design focuses on creating intuitive and visually appealing user interfaces and enhancing the overall user experience."}
    ]

    return (
        <>
            <div className="container">
                <h1 className="text-center" data-aos="fade-up">Topics to Explore</h1>
                <div className="container px-4 py-5" id="icon-grid">
                    <h1 className="pb-2 border-bottom" data-aos="fade-up">Categories</h1>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5" >
                        {tab.map(v => {
                            return (
                                <div key={v.id} className="col d-flex align-items-start"data-aos="fade-up">
                                    <img src={v.image} alt="" className={v.prop1} />
                                    <div>
                                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">{v.title}</h3>
                                        <p>{v.description}<a href="#" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">read more</a></p>
                                    </div>

                                </div>)
                        })}


                    </div>
                </div>


            </div>
        </>
    )


}

export default Category





