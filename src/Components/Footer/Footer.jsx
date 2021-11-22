import React from 'react'
import vector1 from './../../assets/Images/Vector1.png'
import vector2 from './../../assets/Images/Vector2.png'
import vector3 from './../../assets/Images/Vector3.png'

const Footer = () => {
    return (
        <div>
    <div className="footer">
    <div class="container">
        <div class="fbot2">
        <div class="row  text-center">
            <div class="col">
                <a href="/faq" class="mx-3">FAQ</a>
                <a href="/terms-and-conditions" class="mx-3 ">TERMS</a>
                <a href="/privacy-policy" class="mx-3 ">PRIVACY</a>
            </div>
        </div><br />
        <div class="row text-center">
        <div class="col">
        <a href={"/"} class="mx-3"><img src={vector1} alt=""></img></a>
        <a href={"/"} class="mx-3"><img src={vector2} alt=""></img></a>
        <a href={"/"} class="mx-3"><img src={vector3} alt=""></img></a>
        </div>
    </div>
</div>
    </div>
 
</div>
 </div>
    )
}

export default Footer
