import React from 'react'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'

const Reset = () => {
    return (
        <div>
            <NavBar/>

            <div class="reset section">
        <div class="container text-center">
            <div class="row">
                <h1>RESET YOUR PASSWORD</h1>
                <p class="m-0">Verified sellers can login to your Gemint account.</p>
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
                            </div>
                        <input class="formsubmit" type="button" value="CONTINUE"></input>
                        </div>
                    </form>
                </div>
                <div class="col-md-2 d-none d-sm-block"></div>
            </div>
    </div>
    </div>
    <Footer/>
        </div>
    )
}

export default Reset
