import './createacount.css'
import { Link } from 'react-router-dom'

function Createacount() {


    return (
        <>
            <form className="d-flex justify-content-center  flex-direction-column my-5 ">
                
                <div className='container-fliud p-5 m-2 border border-info border-2 rounded-3 shadow '>
                    <p className="text-center Signintitle">Inscription </p>
                    <div className="row">
                        <div className="col">
                            <label className="col-12 col-form-label ">
                                <input placeholder="Firstname" type="text" className="form-control rounded-4" id="exampleFormControlInput1" required />
                            </label>
                        </div>
                        <div className='col'>
                            <label className="col-12 col-form-label">
                                <input placeholder="Lastname" type="text" className="form-control rounded-4" id="exampleFormControlInput1" required />

                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div class="form-check">
                                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" required />
                                <label className="form-check-label" for="radioDefault1">male</label>
                            </div>
                            <div class="form-check">
                                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" required />
                                <label className="form-check-label" for="radioDefault2">female</label>
                            </div>

                        </div>
                    </div>
                    <div className='row my-1'>
                        <div className='col'>
                            <select className="form-select rounded-4" aria-label="Default select example">
                                <option selected>Year of study</option>
                                <option value="1">1st year</option>
                                <option value="2">2nd year</option>
                                <option value="3">3rd year</option>
                            </select>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col">
                            <label for="inputPassword" className="col-12 col-form-label">
                                <input type="email" placeholder='Email' className="form-control rounded-4" id="exampleFormControlInput1" required />
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className="col-12 col-form-label">
                                <input placeholder="Password" type="password" className="form-control rounded-4" id="exampleFormControlInput1" required />

                            </label></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label class="col-12 col-form-label">
                                <input placeholder="Confirm password" type="password" className="form-control rounded-4 " id="exampleFormControlInput1" required />
                            </label></div>
                    </div>
                    <div className='row'>
                        <div className="col">
                            <button className="col-12 col-form-label mt-3 newbutton">Submit</button>
                            <p className='pSignin mt-2'>Already have an acount ? <Link to='/login' className="signin">Signin</Link></p>
                        </div></div>
                </div>
            </form>


        </>
    )
}

export default Createacount

