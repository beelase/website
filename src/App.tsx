//@ts-ignore
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Pollination from "./pages/Pollination";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./pages/LandingPage";

import "./styles/style.scss";
import { Footer } from "./pages/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
    return (
            <BrowserRouter>
                <Header />
                <Navbar />
                <ScrollToTop />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/pollination" component={Pollination} />
                </Switch>
                <Footer />
            </BrowserRouter>
    );
}