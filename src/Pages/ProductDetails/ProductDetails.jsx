import React, { Component } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import productmain from './../../assets/Images/productmain.png'
import productmini2 from './../../assets/Images/productmini2.png'
import product1 from './../../assets/Images/product1.png'
import product2 from './../../assets/Images/product2.png'
import product3 from './../../assets/Images/product3.png'
import product4 from './../../assets/Images/product4.png'
import "./ProductDetails.css"
import Footer from '../../Components/Footer/Footer'
import { render } from '@testing-library/react'
// import productmain from './../../assets/Images/productmain.png'
import {firstFunction} from "./../../Functions/Classfunction"
class ProductDetails extends React.Component {
  render(){
    firstFunction();
    return (
        <div>
            <NavBar />
            <div class="firsta section" id="proda">
  <div class="container">
    <div class="row">
          <div class="col-md-5 ">

            <div class="product-image">
              <div id="oc-shop" class="owl-carousel image-carousel carousel-widget custom-js">

                <div class="oc-item">
                  <a href="#"><img class="image-fluid" src={productmain} alt="Image 1"></img></a>
                </div>
                <div class="oc-item">
                  <a href="#"><img class="image-fluid" src={productmain} alt="Image 2"></img></a>
                </div>
                <div class="oc-item">
                  <a href="#"><img class="image-fluid" src={productmain} alt="Image 3"></img></a>
                </div>
                <div class="oc-item">
                  <a href="#"><img class="image-fluid" src={productmain} alt="Image 4"></img></a>
                </div>
                <div class="oc-item">
                  <a href="#"><img class="image-fluid" src={productmain} alt="Image 5"></img></a>
                </div>
                <div class="oc-item">
                  <a href="#"><img class="image-fluid" src={productmain} alt="Image 6"></img></a>
                </div>

              </div>
              <div class="sale-flash badge bg-danger p-2">Sale!</div>
            </div>
            {/* <!-- Product Single - Gallery End --> */}

          </div>
          <div class="col-md-1"></div>
          <div class="col-md-6 product-desc">

            <div class="d-flex align-items-center justify-content-between">
                <div class="mr-auto"><h2>GEMINT HOODIE</h2></div>
                <div ><h5>$14.05</h5></div>
              </div>
              <h6>Classic Pullover Hoodie</h6><br />
            <div class="col-sm-6">
              <h5 class="fw-medium mb-3">Select Color:<span class="product-color-value ms-1 fw-semibold"></span></h5>
              <div id="product-color-dots" class="owl-dots">
                <button role="radio" class="owl-dot active" data-value="Blue" data-color="#2f3977"></button>
                <button role="radio" class="owl-dot" data-value="Red" data-color="#c8271d"></button>
                <button role="radio" class="owl-dot" data-value="Brown" data-color="#723f2e"></button>
                <button role="radio" class="owl-dot" data-value="Black" data-color="#4a4c4b"></button>
                <button role="radio" class="owl-dot" data-value="Light Brown" data-color="#af6035"></button>
                <button role="radio" class="owl-dot" data-value="Deep Green" data-color="#3d6370"></button>
              </div>
            </div><br />


              <h5 class="fw-medium mb-3">Select Size:</h5>
              <div role="group">
                <input class="btn-check" type="radio" name="bag-size" id="bag-size-s" checked autocomplete="off" value="S"></input>
                <label for="bag-size-s" class="btn btn-sm btn-outline-secondary fw-normal ls0 nott">S</label>

                <input class="btn-check" type="radio" name="bag-size" id="bag-size-m" autocomplete="off" value="M"></input>
                <label for="bag-size-m" class="btn btn-sm btn-outline-secondary fw-normal ls0 nott">M</label>

                <input class="btn-check" type="radio" name="bag-size" id="bag-size-l" autocomplete="off" value="L"></input>
                <label for="bag-size-l" class="btn btn-sm btn-outline-secondary fw-normal ls0 nott">L</label>

                <input class="btn-check" type="radio" name="bag-size" id="bag-size-XL" autocomplete="off" value="XL"></input>
                <label for="bag-size-XL" class="btn btn-sm btn-outline-secondary fw-normal ls0 nott">XL</label>

                <input class="btn-check" type="radio" name="bag-size" id="bag-size-2XL" autocomplete="off" value="2XL"></input>
                <label for="bag-size-2XL" class="btn btn-sm btn-outline-secondary fw-normal ls0 nott">2XL</label>

                <input class="btn-check" type="radio" name="bag-size" id="bag-size-3XL" autocomplete="off" value="3XL"></input>
                <label for="bag-size-3XL" class="btn btn-sm btn-outline-secondary fw-normal ls0 nott">3XL</label>

                <input class="btn-check" type="radio" name="bag-size" id="bag-size-4XL" autocomplete="off" value="4XL"></input>
                <label for="bag-size-4XL" class="btn btn-sm btn-outline-secondary fw-normal ls0 nott">4XL</label>

                <input class="btn-check" type="radio" name="bag-size" id="bag-size-5XL" autocomplete="off" value="5XL"></input>
                <label for="bag-size-5XL" class="btn btn-sm btn-outline-secondary fw-normal ls0 nott">5XL</label>

                <input class="btn-check" type="radio" name="bag-size" id="bag-size-LT" autocomplete="off" value="LT"></input>
                <label for="bag-size-LT" class="btn btn-sm btn-outline-secondary fw-normal ls0 nott">LT</label>

                <input class="btn-check" type="radio" name="bag-size" id="bag-size-XLT" autocomplete="off" value="XLT"></input>
                <label for="bag-size-XLT" class="btn btn-sm btn-outline-secondary fw-normal ls0 nott">XLT</label>

                <input class="btn-check" type="radio" name="bag-size" id="bag-size-2XT" autocomplete="off" value="2XT"></input>
                <label for="bag-size-2XT" class="btn btn-sm btn-outline-secondary fw-normal ls0 nott">2XT</label>

                <input class="btn-check" type="radio" name="bag-size" id="bag-size-3XT" autocomplete="off" value="3XT"></input>
                <label for="bag-size-3XT" class="btn btn-sm btn-outline-secondary fw-normal ls0 nott">3XT</label>

                <input class="btn-check" type="radio" name="bag-size" id="bag-size-4XT" autocomplete="off" value="4XT"></input>
                <label for="bag-size-4XT" class="btn btn-sm btn-outline-secondary fw-normal ls0 nott">4XT</label>

                
              </div>
            
          <br />

            <h6>Size Guide</h6>
            <form class="cart mb-0  align-items-center" method="post" enctype='multipart/form-data'>
              <div class="quantity clearfix">
                <input type="button" value="-" class="minus"></input>
                <input type="number" step="1" min="1" name="quantity" value="1" title="Qty" class="qty"></input>
                <input type="button" value="+" class="plus"></input>
              </div>
              <button type="submit" class="add-to-cart button m-0">Add to cart</button>
            </form>
            {/* <!-- Product Single - Quantity & Cart Button End --> */}
          <div><br />
            <button class="accordion ps-0">Description</button>
            <div class="panel ps-0">
            <p>Stay warm, pull heat! Look crisp and clean in your next Live Rip with the 
                Gemint green and white logo screened on this super-soft hoodie. BANG!</p>
            </div>

            <button class="accordion ps-0">Product Details</button>
            <div class="panel ps-0">
            <p>Classic fit, unisex</p>
            <h6> Materials</h6>
            <p>Cotton-Poly blend</p>
            </div>

            <button class="accordion ps-0">Delivery & Returns</button>
            <div class="panel ps-0">
            <h6> DELIVERY DETAILS</h6>
             <p> Order now and your order will ship by November 9, 2021
                Shipping costs will be calculated at checkout
                Worldwide Shipping Available
                Additional Shipping speed options are available at Checkout
                Products are fulfilled from the US & EU</p>
                
               <h6> RETURN DETAILS</h6>
               <p> If you're not 100% satisfied, let us know and we'll make it right
                Learn more</p>
            </div>
        </div>
        <a href="#"><i class="fas fa-exclamation-triangle"></i> Report this product</a>

        </div>
    </div><br /><br />
    <div class="row">
        <div class="col-md-12">
            <h1 class="text-center">YOU MIGHT ALSO LIKE</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-md-3">
            <div id="product">
            <img class="rounded mx-auto d-block" src={product1} alt=""></img>
            <p class="text-center"><m>Gemint Hoodie</m></p>
            <p class="text-center">Classic Pullover Hoodie</p>
            <p class="text-center"><m>$50.00</m></p>
            </div>
        </div>
        <div class="col-md-3">
            <div id="product">
            <img class="rounded mx-auto d-block" src={product2} alt=""></img>
            <p class="text-center"><m>Hobby Homies Tee</m></p>
            <p class="text-center">Classic Tee</p>
            <p class="text-center"><m>$14.05</m></p>
            </div>
        </div>
        <div class="col-md-3">
            <div id="product">
            <img class="rounded mx-auto d-block" src={product3} alt=""></img>
            <p class="text-center"><m>Hobby Driven Tee</m></p>
            <p class="text-center">Classic Tee</p>
            <p class="text-center"><m>$25.00</m></p>
            </div>
        </div>
        <div class="col-md-3">
            <div id="product">
            <img class="rounded mx-auto d-block" src={product4} alt=""></img>
            <p class="text-center"><m>Powering The Hobby Tee</m></p>
            <p class="text-center">Classic Tee</p>
            <p class="text-center"><m>$25.000</m></p>
            </div>
        </div>
    </div>
  </div>
</div>
            <Footer/>
            
        </div>
        
    )}
  }

export default ProductDetails
