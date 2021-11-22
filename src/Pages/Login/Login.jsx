import { render } from '@testing-library/react'
import React from 'react'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'

const Login = () => {
    return (
        <div>
            {/* NavBar Component Call*/}
            <NavBar />
            {/* NavBar End*/}

            {/* row 1  */}
            <div class="reset section">
        <div class="container text-center">
            <div class="row">
                <h1>SELLER LOGIN</h1>
                <p class="m-0">VERIFIED SELLERS CAN LOGIN TO YOUR GEMINT ACCOUNT.</p>
                <small class="mb-3">Don't have a login? <a href="/registration">Sign up</a> for a free trial</small>
                
                <div class="col-md-2 d-none d-sm-block"></div>
                <div class="col-md-8">
                    <form action="">
                        <div class="formcontainer">
                            <div class="container">
                                <div class="mb-3 text-center">
                                    <label><strong>Email</strong></label>
                                    <input type="text"  name="uname" required></input>
                                </div>
                                <div class="mb-3 text-center">
                                    <label><strong>Password</strong></label>
                                    <input type="password"  name="uname" required></input>
                                    <small><a href="#" style={{float:"right", fontSize:"12px"}}>Forgot Password</a></small>
                                </div>
                
                            </div>
                        </div>
                        <input class="formsubmit" type="button" value="SIGN IN"></input>
                    </form>
                </div>
                <div class="col-md-2 d-none d-sm-block"></div>
            </div>
        </div>  
    </div>
            {/* row 1 End */}

            {/* Footer */}
            <Footer/>
            {/* Footer End*/}
        </div>
    )
}

export default Login
