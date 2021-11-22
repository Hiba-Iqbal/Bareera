import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import dice3 from './../../assets/Images/dice3.png'
import plus from './../../assets/Images/plus.png'
import minus from './../../assets/Images/minus.png'
import Footer from '../../Components/Footer/Footer'


const Tier = () => {
    return (
        <div>
            <NavBar/>

            <div class="firsta section">
    <div class="tt">
    <div class="row">
        <div class="col-md-6">
            <h1>MLB Tier Break</h1><br />
            <img class="image-fluid" src={dice3} alt=""></img>
            <a href="#" class="abtn ">ROLL</a><br /><br />
            <p>Timestamp: 10/29/2021 12:08:22 PM <br />
                GMT+5</p>
        </div>
        <div class="col-md-6 ">
            <a class="tierdrop" href=""> Team </a>
            <a class="tierdrop" href=""> Division </a>
            <a class="tierdrop" href=""> Custom Tier </a>
        </div>
    </div>
<hr /><br />
    <a href={'/'} class="abtn ">Lock to randomize</a><br /><br />
    </div>
    <div class="tt">
        <div class="row">
            <div class="col-md-3 spot">
                <h2 class="text-center">Spot</h2>
                <ul class="tier">
                    <li class="tier-item">1</li>
                    <li class="tier-item">2</li>
                    <li class="tier-item">3</li>
                    <li class="tier-item">4</li>
                    <li class="tier-item">5</li>
                    <li class="tier-item">6</li>
                    <li class="tier-item">7</li>
                    <li class="tier-item">8</li>
                    <li class="tier-item">9</li>
                    <li class="tier-item">10</li>
                </ul>
                <div class="tier-add">
                <img class="image-fluid" src={plus} alt=""></img>
                <img class="image-fluid" src={minus} alt=""></img>
                </div>
            </div>

            <div class="col-md-3 inner-tier">
                <h2 class="text-center">Tier 1</h2>
                <ul class="tier">
                    <li class="tier-item">Phillies</li>
                    <li class="tier-item">Pirates</li>
                    <li class="tier-item">Cardinals</li>
                    <li class="tier-item">Padres</li>
                    <li class="tier-item">Braves</li>
                    <li class="tier-item">White Sox</li>
                    <li class="tier-item">Marlins</li>
                    <li class="tier-item">Angels</li>
                    <li class="tier-item">Yankees</li>
                    <li class="tier-item">Orioles</li>
                </ul>
            </div>


            <div class="col-md-3 inner-tier">
                <h2 class="text-center">Tier 2</h2>
                <ul class="tier">
                    <li class="tier-item">Nationals</li>
                    <li class="tier-item">Mets</li>
                    <li class="tier-item">Red Sox</li>
                    <li class="tier-item">Royals</li>
                    <li class="tier-item">Rangers</li>
                    <li class="tier-item">Blue Jays</li>
                    <li class="tier-item">Mariners</li>
                    <li class="tier-item">Twins</li>
                    <li class="tier-item">Giants</li>
                    <li class="tier-item">Dodgers</li>
                </ul>

            </div>

            <div class="col-md-3 inner-tier">
                <h2 class="text-center">Tier 3</h2>
                <ul class="tier">
                    <li class="tier-item">Indians</li>
                    <li class="tier-item">Brewers</li>
                    <li class="tier-item">Cubs</li>
                    <li class="tier-item">Reds</li>
                    <li class="tier-item">Athletics</li>
                    <li class="tier-item">Rockies</li>
                    <li class="tier-item">Tigers</li>
                    <li class="tier-item">Diamondbacks</li>
                    <li class="tier-item">Rays</li>
                    <li class="tier-item">Astros</li>
                </ul>
            </div>
        </div>
        
    </div><br /><br />
    <div class="text-center">
    <a href={'/'} class="abtn" style={{color:" white !important"}}>DOWNLOAD</a><a href={'/'} style={{color: "white !important"}} class="abtn">SAVE AS</a>
    </div>
</div >
<Footer/>
        </div>
    )
}

export default Tier
