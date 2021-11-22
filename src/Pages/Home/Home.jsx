import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Dice from "../../assets/Images/dice.png"
import instagram from './../../assets/Images/instagram.png'
import img1 from '../../assets/Images/img1.png'
import img2 from '../../assets/Images/img2.png'
import vector1 from './../../assets/Images/Vector1.png'
import vector2 from './../../assets/Images/Vector2.png'
import vector3 from './../../assets/Images/Vector3.png'
import Footer from '../../Components/Footer/Footer'
import {auth} from '../../Firebase/Firebase'

const Home = () => {
    console.log(auth)
    return (
        <div>
            {/* NavBar Component Call*/}
            <NavBar />
            {/* NavBar End*/}

            {/* row1 */}
            <div class="row hero">
            <div class="col-md-12">
            <h4>Modern card breaking tools</h4>
            <h1><span>connecting </span>breakers & buyers</h1>
            </div>
            <div class="col-md-12">
            <p>Join Gemint Premium and get access to our full breaker’s toolset</p>
            <span>- free for 7 days + $10/month </span>
             </div>
        <div class="col my-3">
            <a href="/registration" class="abtn">SIGNUP</a>
        </div>
    </div>
       {/* row1 End */}
       {/* row2*/}
    <div className="section">
    <div class="container-fluid dic">
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-6">
                <h4>Break Title</h4>
                <hr />
                <textarea name="" id="" cols="auto" rows="15" placeholder="Type to add items, each on a new line."></textarea>
                <div class="row">
                <div class="col-md-4"><p> Randomize counter: 1</p></div>
                <div class="col-md-2"></div>
                <div class="col-md-6 "><p> Timestamp: 10/28/2021 1:14:39 PM</p>  </div>
            </div>
            <div class="row">
                <div class="col-md-12 my-3">
                    <a href={"/"} class="abtn ">RANDOMIZE</a> <a href={"/"} >RESET</a>
                </div>
            </div>
                
            
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-3 text-center  justify-content-center">
                <h2>ROLL THE DICE</h2>
                <hr class="line" />
                <img class="dicimg img-fluid" src={Dice} alt=""></img>
                <div class="col-md-12">
                    <a href={"/"} class="abtn rol">ROLL</a>
                    <a href={"/"} class="my-3" >OPTIONS</a>
                </div>
            </div>
            <div class="col-md-1 text-center">
                
            </div>
        </div>
    </div>
</div>
 {/* row2 End*/}

 {/* row3*/}
<div className="section">

<div class="container inst">
    <div class="row">
        <div class="col-md-6"><img class="img-fluid" src={img1} alt=""></img></div>
        <div class="col-md-1"></div>
        <div class="col-md-5 d-flex align-items-center">
            <div>
                <img class="mb-2 img-fluid" src={instagram} alt=""></img>
                <h4>Intragram</h4>
                <h1>TESTIMONIALS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                <br />
                <a href={"/"}class="abtn ">@GEMINT._</a>
            </div>
        </div>
    </div>
</div>
</div>
 {/* row3 End*/}

 {/* row 4 */}
 <div className="section">
        <div class="container tiers">
            <div class="row">
                <div class="col-md-5 d-flex align-items-center">
                    <div>
                        <h4>RANDOMIZE YOUR</h4>
                        <h1>BREAKS BY <span> TIERS </span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        <br />
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-6"><img class="img-fluid" src={img2} alt=""></img></div>
            </div>
        </div>
    </div>
 {/* row 4 End*/}

{/* footer */}

            <div class="row section">
                <div class="col text-center">
                    <img class="rounded mx-auto d-block img-fluid" src="images/logo.png" height="50" alt=""></img>
                    <h1 class="text-center">TRY GEMINT PREMIUM 7 DAYS FREE <br /> THEN <s>$15.00</s> <span>$10.00 </span>PER MONTH. </h1>
                    <p class="text-center">Premium access to Gemint sales tools and services.</p>
                    <a href="/registration" class="abtn ">SIGN UP</a>
                </div>
            </div>
            <Footer/>
          

{/* footer End*/}

{/* End Here */}
        </div>

    )
}

export default Home