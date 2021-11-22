import React from 'react'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'

const Registration = () => {
    return (
        <div>
           <NavBar />
        <div className="section">
            <div class="row">
            <h1 class="text-center">CREATE YOUR ACCOUNT</h1>
            <p class="text-center"> JOIN THE GEMINT WAITLIST TO RESERVE YOUR USERNAME<br/>
                AND BE ENTERED TO WIN FREE CARDS</p>
            </div>

        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <form action="">
                    <div class="formcontainer">
                        <div class="container">
                            <div class="mb-3">
                                <label for="uname"><strong>Username</strong></label>
                                <input type="text"  name="uname" required></input>
                                <label class="form-check-label" style={{fontSize: "12px"}}>This username is all yours</label>
                                <input type="checkbox" class="form-check-input float-end" id="exampleCheck1"></input>
                            </div>
                
                            <div class="mb-3">
                                <label for="uname"><strong>First Name</strong></label>
                                <input type="text"  name="uname" required></input>
                            </div>
                
                            <div class="mb-3">
                                <label for="uname"><strong>Last Name</strong></label>
                                <input type="text"  name="uname" required></input>
                            </div>
                
                            <div class="mb-3">
                                <label for="uname"><strong>Email</strong></label>
                                <input type="text"  name="uname" required></input>
                            </div>
                
                            <div class="mb-3">
                                <label for="uname"><strong>Password</strong></label>
                                <input type="password"  name="uname" required></input>
                            </div>
            
                        </div>
                    <input class="formsubmit" type="button" value="CREATE ACCOUNT"></input>
                    </div>
                </form>
            </div>
            </div>
            <div class="col-md-3"></div>
            </div>

            <Footer/>
        </div>
    )
}

export default Registration
