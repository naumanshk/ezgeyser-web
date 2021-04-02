import React, { useEffect, useState, Component } from 'react';
import { ResponsiveDrawer } from './navbar'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Row, Col, Form } from 'react-bootstrap'
import heat from '../assets/heat.png'
import pressure from '../assets/pressure-gauge.png'
import liter from '../assets/calendar@2x.png'
import power from '../assets/power.png'
import powerred from '../assets/power (1).png'

import water_heater from '../assets/newez.png'
import switch_on from '../assets/switch-on.png'
import switch_off from '../assets/switch-off.png'
import Chart from './chart'
import Grid from '@material-ui/core/Grid';



class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: true,
            on_off:false
        }
    }

    render() {




        return (
            <Container>

                <div style={{ marginTop: '40px' }} className="justify-center flex flex-responsive  margin-bottom-10 width-100 margin-auto" >


                    <div className="class-box-orange" >
                        <div style={{ paddingLeft: 0, width: '58%' }}>
                            <img src={heat} className="class-icon" />
                            <h4 style={{ marginBottom: 0 }} className="regular font-small-h">Current Temperature</h4>

                        </div>
                        <p style={{ margin: 0 }} className="regular font-small-h">35 &#8451;</p>


                    </div>

                    <div className="class-box-orange" >
                        <div style={{ paddingLeft: 0, width: '58%' }}>
                            {this.state.on_off ? <img onClick={e=>this.setState({on_off:!this.state.on_off})} src={powerred} className="class-icon" /> :<img onClick={e=>this.setState({on_off:!this.state.on_off})}  src={power} className="class-icon" />}
                            <h4 style={{ marginBottom: 0 }} className="regular font-small-h">Geyser Status</h4>

                        </div>
                        <p style={{ margin: 0 }} className="regular font-small-h">{this.state.on_off ? 'On' : 'Off' }</p>


                    </div>

                    <div className="class-box-orange" >
                        <div style={{ paddingLeft: 0, width: '58%' }}>
                            <img src={liter} className="class-icon" />
                            <h4 style={{ marginBottom: 0 }} className="regular font-small-h">Next Schedule</h4>

                        </div>
                        <p style={{ margin: 0 }} className="regular font-small-h">5:30 pm</p>


                    </div>

                    <div className="class-box-orange" >
                        <div style={{ paddingLeft: 0, width: '58%' }}>
                            <img src={pressure} className="class-icon" />
                            <h4 style={{ marginBottom: 0 }} className="regular font-small-h">Water Usage</h4>

                        </div>
                        <p style={{ margin: 0 }} className="regular font-small-h">2.0 ltr</p>


                    </div>


                </div>

                <Container>
                        <Grid container className="justify-center">
                            <Grid md={12} xs={12} lg={8} >
                             
                                <div className="mychart">
                                    <Chart />

                                </div>
                            </Grid>

                            {/* <Grid md={12} xs={12} lg={6}>
                          
                                <div className="mychart">
                                    <Chart />

                                </div>
                            </Grid> */}


                        </Grid>



                    </Container>

                {/* <div style={{ marginTop: '40px' }} className="justify-center flex flex-responsive  margin-bottom-10 width-100 margin-auto" >
                    <div className="chart-box-grey" >

                      
                            <Chart />

                     



                    </div>
                    <div className="chart-box-grey" >
                        <div >

                        </div>



                    </div>


                </div> */}

                <div style={{ marginTop: '40px' }} className="justify-center flex flex-responsive  margin-bottom-10 width-100 margin-auto" >
                    {/* <div className="on_off-box" >
                        <div className='center'>
                            <div className='center'>
                                <h4 style={{ marginBottom: 0 }} className="regular">Water Usage</h4>
                                <img src={water_heater} className="on_off-icon" />
                            </div>
                            <button class='btn-turn-on'>Turn On</button>
                        </div>

                    </div> */}

                    {/* <div className="timer-box" >
                        <div style={{ width: '50%', height: '100%' }} className=''>
                            <h4 style={{ marginBottom: '64px', padding: '20px' }} className="regular">Today On/Off Time</h4>

                            <div className='center border-right-timer'>
                                <img src={switch_on} className="timer-icon" />
                                <h4 style={{ marginBottom: 0 }} className="regular font-small-h bold">5.00 AM</h4>
                            </div>


                        </div>



                        <div style={{ width: '50%', height: '100%' }} className=''>
                            <h4 style={{ marginTop: '10px', marginBottom: '50px', padding: '20px', textAlign: 'end' }} className="regular  font-small-h bold">31 Jan Sun</h4>

                            <div className='center'>
                                <img src={switch_off} className="timer-icon" />
                                <h4 style={{ marginBottom: 0 }} className="regular font-small-h bold">5.00 AM</h4>
                            </div>


                        </div>


                    </div> */}


                </div>


            </Container>


        );
    }
}

export default Dashboard;