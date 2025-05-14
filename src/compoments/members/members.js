import { useState,useEffect} from 'react'
import Footer from '../home/footer'
import AOS from 'aos';
import 'aos/dist/aos.css'

function Cardsmember(props) {
 
    const [ishover, sethover] = useState(false)

    return (
        <>
            <div className="card  shadow p-2 m-2" style={{ width: "15rem", height: "28rem" }} >
                <img src={props.image} class="card-img-top border border-3 border-info rounded-5" alt="..." />
                <div className="card-body d-sm-flex flex-column justify-content-between">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.role}</p>
                    <hr />
                    <div className="container-fliud ">
                        <a href=""  style={{ color: ishover ? "#C2185B" : "#E91E63" }} onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-instagram me-5 mt-1" viewBox="0 0 16 16" >
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg>
                        </a>
                        <a href="" className="link-primary " >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-linkedin me-5 mt-1 " viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                            </svg>
                        </a>
                        <a href="" className="link-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope mt-1" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                        </a>


                    </div>
                </div>
            </div>
        </>
    )
}


function Member() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,

        });
    }, []);

    const tableau = [{id:1,image:"/image/upload/profile.png",names:"Dr. Sanaa EL FILALI",role:"Team Leader"},
    { id:2,image: "/image/upload/photo1.png", names: "Ikrame EZZIRAGUE", role: "President" },
    { id:3,image: "/image/upload/image32.png", names: "Hiba JANNANE", role: "Vice-President" },
    { id:4,image: "/image/upload/image44.png", names: "Hiba ADLIL", role: "Event Manager" },
    { id:5,image: "/image/upload/image68.png", names: "Meriem SELMANE ", role: "Secretary General " },
    { id:6,image: "/image/upload/image56.png", names: "Fatima Zahrae Er-raqi", role: "Treasurer" },
    { id:7,image: "/image/upload/resp3.png", names: "Fatima-zahra ALAOUI", role: "Responsible for Internal and External Relations" },
    { id:8,image: "/image/upload/image80.png", names: "Yassine IDRISSI MOUNTASSIR", role: "Digital and Human Actions Manager" },
    { id:9,image: "/image/upload/image92.png", names: "Kaoutar MOTASSIM", role: "Human Resources Manager" },
    { id:10,image: "/image/upload/image104.png", names: "Mohamed ELMASMARI", role: "Chief Design" },


    ]
    return (
        <>

            <div className=" mb-5" id='mtitle' data-aos="fade-up">
                <div id="carouselExampleCaptions" class=" carousel slide">
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <img src="/image/img/banner-3.jpg" className="d-block w-100" style={{ height: "200px" }} alt="..." />
                            <div className="carousel-caption  d-md-block position-absolute top-50 start-50 translate-middle " >
                                <h1 className='text-center text-light ' >Meet Our Team </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container  my-5">

                <div class="row justify-content-center justify-content-md-between g-md-5 g-4 ">
                    {tableau.map(v => {
                        return (
                            <div key={v.id} className='col-12 col-sm-8 col-md-6 col-lg-4 d-flex justify-content-center' data-aos="fade-up" data-aos-delay="100">
                                <Cardsmember image={v.image} name={v.names} role={v.role} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />

        </>
    )


}

export default Member