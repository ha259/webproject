import { Link } from "react-router-dom"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Headpage() {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
              
        });
      }, []);

     const tableofdata =[{id:1,image:"/image/img/icon1.png",design:"w-25 mb-1",title:"Explore Our Core",description:"We’re a community driven by curiosity, innovation, and growth in AI and development. From learning to building, we support each other in turning ideas into real-world tech."},
        {id:2,image:"/image/img/icon5.png",design:"w-25 mb-1",title:"Learn. Build. Connect",description:"Learn. Build. Connect. At AI & Dev Club, we grow together through hands-on projects, shared knowledge, and a passion for tech."},
        {id:3,image:"/image/img/icon6.png",design:"w-25 mb-1",title:"The AI & Dev Experience",description:"Dive into a world of learning, building, and connecting. Join us to shape the future of AI and development with hands-on projects and a collaborative community"}
    ]

    return (
        <>
                <div id="myCarousel" className="carousel slide mb-6 overflow-hidden" data-bs-ride="carousel" data-aos="fade-up">
                   
                    <div className="carousel-inner">
                        <div className="carousel-item active bg-dark ">
                            <img src="background.jpg" alt="" className="w-100 opacity-50" height="550px"/>
                            <div className="container">
                                <div className="carousel-caption text-start mb-5">
                                    <h1>Welcome to AI&DEV <span className="text-info ">Community</span></h1>
                                    <p className="opacity-75">Welcome to the Future Powered by AI, Built by Developers.</p>
                                    <Link to='logging/createacount'><button className="btn btn-info text-light">join community</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item  bg-dark ">
                        <img src="image/img/carousel-1.jpg" alt="" className="w-100 opacity-50" height="550px"/>
                            <div className="container">
                                <div className="carousel-caption text-start mb-5">
                                    <h1>learn more about AI&DEV <span className="text-info ">Community</span></h1>
                                    <p>Join the AI & Dev Club  Where Innovation Meets Code.</p>
                                    <Link to='aboutus/about'><button className="btn btn-info text-light">learn more</button></Link>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next " type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="container marketing my-5 overflow-hidden">
                    <h1 className="text-center my-5" data-aos="fade-up">Invest in your professional goals with <span className="text-info">AI&DEV</span> </h1>
                    {/* <!-- Three columns of text below the carousel -->*/}
                    <div className="row" >
                     {tableofdata.map(v=>{
                        return(
                            <div key={v.id} className="col-lg-4 text-center">
                                <img src={v.image} className={v.design} alt=""  data-aos="fade-up"/>
                                <h2 className="fw-normal"  data-aos="fade-up">{v.title}</h2>
                                <p  data-aos="fade-up">{v.description}</p>
                            </div>
                        )
                     })}                        
                    </div>
                </div>
        </>
    )

}

export default Headpage

