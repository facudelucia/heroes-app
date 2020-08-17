import React, { Fragment } from 'react';
import {NavBar} from "../components/ui/NavBar";
import { Switch, Route, Redirect } from 'react-router-dom';
import MarvelScreen from '../components/marvel/MarvelScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import DcScreen from '../components/dc/DcScreen';
import SearchScreen from "../components/search/SearchScreen";

const DashboardRoutes = () => {
    return ( 
        <Fragment>
            <NavBar/>
            <div className="container mt-5">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/hero/:heroeId" component={HeroScreen}/>
                    <Route exact path="/dc/" component={DcScreen}/>
                    <Route exact path="/search" component={SearchScreen}/>
                    <Redirect to="/marvel" />
                    
                </Switch>
            </div>
        </Fragment>
     );
}
 
export default DashboardRoutes;