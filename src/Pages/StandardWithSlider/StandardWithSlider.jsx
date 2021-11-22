import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import RANDOMIZER from './../../assets/Images/RANDOMIZER.png'
import LoudPackBreaks from './../../assets/Images/LoudPackBreaks.png'
import dice2 from './../../assets/Images/dice2.png'
import roundlogo from './../../assets/Images/roundlogo.png'
import v from './../../assets/Images/v.png'
import Footer from '../../Components/Footer/Footer'


const StandardWithSlider = () => {
    return (
        <div>
            <NavBar/>

    <div class="firsta section">
    <div class="container slid">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8"><img class="image-fluid" src={RANDOMIZER} alt=""></img><img class="image-fluid" src={LoudPackBreaks} alt=""></img></div>
            <div class="col-md-2"></div>
        </div> <br />
        <div class="row ">
            <div class="col-md-1"></div>
            <div class="col-md-10 standslider">
                <h4>Break Title</h4>
                <hr />
                <div class="row">
                <div class="col-md-4"></div>
            <div class="col-md-4"><img class="image-fluid" src={dice2} alt=""></img></div>
                <div class="col-md-4"><a href="#" class="abtn ">ROLL</a></div><br />
            </div><br />
            <div class="row">
            <p class="text-center"> Timestamp: 11/2/2021 12:02:04 AM PDT</p>
          
            <div class="col-md-12 ms-auto mb-5 text-center"><a href="#" class="abtn ms-auto text-center">Reset Position</a></div>
            <p class="text-center"> Type to add items, each on a new line.</p>
            </div>
            <div class="ms-auto text-center">
            <img class="image-fluid" src={v} alt=""></img>
            </div>  
            <div class="row roundlog">
                <img class="rounded mx-auto d-block img-fluid w-50"  src={roundlogo} alt=""></img>
            </div>
            <div class="row">
                <div class="col-md-4"><p> Randomize counter: 1</p></div>
                <div class="col-md-2"></div>
                <div class="col-md-6 "><p>Timestamp: 11/2/2021 12:02:04 AM PDT</p>  </div>
            </div><br/>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6"><a href="#" class="abtn ">RANDOMIZE</a><a href="#" class="abtn2 ">RESET</a></div>
                <div class="col-md-3"></div>
            </div><br/>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6"><a href="#" class="abtn2 ">UNDO</a><a href="#" class="abtn2 ">REDO</a></div>
                <div class="col-md-3"></div>
            </div>
            </div>
            <div class="col-md-1"></div>
        </div>
    </div>
    </div>

    <Footer />
</div>
    )
}

export default StandardWithSlider
