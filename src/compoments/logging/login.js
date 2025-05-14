import './login.css'


import { Link } from 'react-router-dom'


function Login() {
    return (
        <>
            <div className='d-flex justify-content-center mt-5 mb-5 '>
                <div className="logincontainer border border-info border-2 ">
                    <p className="logintitle">Welcome back</p>
                    <form className="loginform ">
                      
                            <input type="email" className="logininput " placeholder="Email" required />
                            <input type="password" class="logininput" placeholder="Password" required />
                            <p className="loginpagelink">
                                <span className="loginpagelinklabel">Forgot Password?</span>
                            </p>
                            <button className="loginbtn">Log in</button>
                      
                    </form>
                    <p className="loginsignuplink">
                        Don't have an account? <Link to='/logging/createacount'><span className="loginsignup">Sign up</span></Link>
                    </p>

                </div>
            </div>



        </>
    )

}

export default Login