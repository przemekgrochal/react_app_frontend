import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useRouteMatch
} from "react-router-dom";

/*******************************************
********************************************
                    Auth
********************************************
*******************************************/

import auth from '../Auth/Auth';

/*******************************************
********************************************
        Imports for front pages
********************************************
*******************************************/

import  Header from '../Front/layouts/Header/Header';
import  HomePage from '../Front/HomePage/HomePage';
import  Conferencess from '../Front/Conferences/Conferences';
import  Blog from '../Front/Blog/Blog';
import  Prelegents from '../Front/Prelegents/Prelegents';
import  Footer from '../Front/layouts/Footer/Footer';
import  ErrorPage from '../Front/ErrorPage/ErrorPage';

/*******************************************
********************************************
        Imports for admin panel
********************************************
*******************************************/

import  Panel from '../Admin/Panel';
import  LoginFormAdmin from '../Admin/LoginForm/LoginFormAdmin';
import Register from '../Admin/Register/Register';

/*******************************************
********************************************
        Application routes
********************************************
*******************************************/

const Routes = () => {

    // console.log(userIsLogged());
    return (
        <>
            <Router>
                <Switch>
                    
                    {/* -----------------------
                      Routes for main menu 
                    -------------------------*/}

                    <Route path="/" exact>
                        <Panel/>
                        <Header />
                        <HomePage />
                        <Footer />
                    </Route>

                    <Route path="/conferences">
                        <Panel/>
                        <Header />
                        <Conferencess />
                        <Footer />
                    </Route>

                    <Route path="/blog">
                        <Panel/>
                        <Header />
                        <Blog />
                        <Footer />
                    </Route>

                    <Route path="/prelegents">
                        <Panel/>
                        <Header />
                        <Prelegents />
                        <Footer />
                    </Route>

                    {/* -----------------------
                      Routes for drop down menu "AMBASADORS"
                    -------------------------*/}

                    <Route path="/ambassadors/profiles-ambassadors">
                        <Header />
                        <div>SYLWETKI AMBASADORÓW</div>
                        <Footer />
                    </Route>

                    <Route path="/ambassadors/company-and-institutions">
                        <Header />
                        <div>FIRMY I INSTYTUCJE</div>
                        <Footer />
                    </Route>

                    <Route path="/ambassadors/code">
                        <div>KODEKS AMBASADORA</div>
                        <a href="/">Powrót do strony głównej</a>
                    </Route>

                    <Route path="/ambassadors/manifest">
                        <div>MANIFEST AMBASADORA</div>
                        <a href="/">Powrót do strony głównej</a>
                    </Route>

                    {/* -------------------------------- */}

                    <Route path="/ambassadors">
                        <Panel/>
                        <Header />
                        <div>Ambasadorzy</div>
                        <Footer />
                    </Route>

                    <Route path="/partners">
                        <Panel/>
                        <Header />
                        <div>Partnerzy</div>
                        <Footer />
                    </Route>

                    <Route path="/about">
                        <Panel/>
                        <Header />
                        <div>O nas</div>
                        <Footer />
                    </Route>

                    <Route path="/contact">
                        <Panel/>
                        <Header />
                        <div>contact</div> 
                        <Footer />
                    </Route>

                    {/* -----------------------
                      Routes for Admin Panel 
                    -------------------------*/}

                    <Route
                        path="/panel"
                        exact
                        render={
                            () => {
                                if(auth() === false){
                                    return <LoginFormAdmin />
                                } else {
                                    return <Redirect to='/panel/dashboard' />;
                                }
                            }
                        }
                    />

                    <Route
                        path="/panel/:id"
                        render={
                            ({ match }) => {
                                if(match.params.id === "dashboard"){
                                    return <Panel match={match.params.id}/>
                                } else {
                                    return <Redirect to='/panel' />;
                                }
                            }
                        }
                    />

                    <Route path="/register">
                        <Register/> 
                        <Footer />
                    </Route>
                
                    {/* -------------------------
                      Route for a page not found 
                    ---------------------------*/}

                    <Route>
                        <Panel/>
                        <ErrorPage />
                        <Footer />
                    </Route>

                </Switch>
            </Router>
        </>
    );
}

export default Routes;