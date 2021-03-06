import React from 'react'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import product1 from './../../assets/Images/product1.png'
import product2 from './../../assets/Images/product2.png'
import product3 from './../../assets/Images/product3.png'
import product4 from './../../assets/Images/product4.png'

const Feature = () => {
    return (
        <div>
            <NavBar />

            <div className="section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="text-center">FEATURED PRODUCTS</h1>
            </div>
        </div>
        <div class="row">
            <a href="product-detail.html"></a>
                <div class="col-md-3">
                    <a href="product-detail.html">
                    <div id="product">
                    <img class="rounded mx-auto d-block" src={product1} alt=""></img>
                    <p class="text-center"><m>Gemint Hoodie</m></p>
                    <p class="text-center">Classic Pullover Hoodie</p>
                    <p class="text-center"><m>$50.00</m></p>
                    </div>
                </a>
                </div>
                <div class="col-md-3">
                    <a href="product-detail.html">
                    <div id="product">
                    <img class="rounded mx-auto d-block" src={product2} alt=""></img>
                    <p class="text-center"><m>Hobby Homies Tee</m></p>
                    <p class="text-center">Classic Tee</p>
                    <p class="text-center"><m>$14.05</m></p>
                    </div>
                    </a>
                </div>
                
                <div class="col-md-3">
                    <a href="product-detail.html">
                    <div id="product">
                    <img class="rounded mx-auto d-block" src={product3} alt=""></img>
                    <p class="text-center"><m>Hobby Driven Tee</m></p>
                    <p class="text-center">Classic Tee</p>
                    <p class="text-center"><m>$25.00</m></p>
                    </div>
                    </a>
                </div>
            
                <div class="col-md-3">
                    <a href="product-detail.html">
                    <div id="product">
                <img class="rounded mx-auto d-block" src={product4} alt=""></img>
                    <p class="text-center"><m>Powering The Hobby Tee</m></p>
                    <p class="text-center">Classic Tee</p>
                    <p class="text-center"><m>$25.000</m></p>
                    </div>
                    </a>
                </div>

        </div>
    </div>
</div>
                <Footer/>
        </div>
    )
}

export default Feature
