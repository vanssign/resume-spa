import React, { Component } from 'react';
import Header from './Header';
import Banner from './Jumbotron';
import About from './About';
import Contact from './Contact';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';

class Main extends Component {

 
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                <SwipeableRoutes>  
                    <Route exact path="/home" component={()=><Banner/>}/>
                    <Route exact path="/about" component={()=><About/>}/>
                    <Route exact path="/contact" component={()=><Contact/>}/>
                    </SwipeableRoutes>
                    <Redirect to="/home"/>
                </Switch>    
            </div>
        )
    }
}

export default withRouter(Main);