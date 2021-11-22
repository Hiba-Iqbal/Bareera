import React from 'react'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import { motion } from 'framer-motion';

const Done = () => {
    return (
        <div>
            <NavBar />
            <div class="section reset">
             <div class="container text-center">
            <div class="row">
                <h1>DONE</h1>
                <p class="m-0">AN EMAIL WITH YOUR CODE HAS BEEN SENT TO</p>
                <p>XYZ@MAIL.COM</p>

                  <form action="">
                      <div class="formcontainer">
                          <div class="container">
                  
                              <div class="mb-3 text-center">
                                  <label><strong>Enter code</strong></label>
                                  <input type="text"  name="uname" required></input>
                              </div>
              
                          </div>
                            <a href="/reset"><input class="formsubmit" type="button" value="RESET PASSWORD"></input></a>
                          </div>
                  </form>
            </div>
    </div>
    </div>
            <Footer/>
        </div>
    )
}

export default Done
