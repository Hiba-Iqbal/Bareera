import React from "react";
import "./App.css";
import 'bootstrap/dist/js/bootstrap.js';
import Home from "../src/Pages/Home/Home";
import Login from "./Pages/Login/Login";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  
import FAQ from "./Pages/FAQ/FAQ";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./Pages/TemsAndConditions/TermsAndConditions";
import Registration from "./Pages/Registration/Registration";
import Reset from "./Pages/Reset/Reset";
import Pricing from "./Pages/Pricing/Pricing";
import Tier from "./Pages/Tier/Tier";
import StandardWithSlider from "./Pages/StandardWithSlider/StandardWithSlider";
import Feature from "./Pages/Feature/Feature";
import { Route, Switch } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Done from "./Pages/Done/Done";
import { motion } from 'framer-motion';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/standard-with-slider" component={StandardWithSlider}/>
                <Route path="/feature" component={Feature}/>
                <Route path="/tier" component={Tier}/>
                <Route path="/pricing" component={Pricing}/>
                <Route path="/reset" component={Reset}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/privacy-policy" component={PrivacyPolicy}/>
                <Route path="/terms-and-conditions" component={TermsAndConditions}/>
                <Route path="/faq" component={FAQ}/>
                <Route path="/product-details" component={ProductDetails}/>
                <Route path="/done" component={Done}/>
                </Switch>
        </div>
    );
}

export default App;