import React, {useEffect, useState, Component} from 'react';
import {ResponsiveDrawer} from './navbar'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from './dashboard'
import Schedule from './schedule'



class ezGeyserHome extends Component {
    constructor(){
        super();
        this.state = {
            loggedIn: true
        }
    }

    render(){

   


        return (

            <React.Fragment>
                <Router >
                <div className="appgrid component-background" >
                    <div >
                    <ResponsiveDrawer /> 
                    </div>
                    <div>

                  
                        <Switch>
                       <Route exact path="/" component={Dashboard}  />  
                       <Route exact path="/schedule/" component={Schedule}  />  
                    



                      
                        </Switch>
                   
                    
                    </div>
                    <div></div>
                </div>
                </Router>
            </React.Fragment>
          );
    }
}

export default ezGeyserHome;