import React, { useEffect, useState, Component } from 'react';
import { ResponsiveDrawer } from './navbar'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from '@material-ui/core/Button';

import { Row, Col, Form } from 'react-bootstrap'
import heat from '../assets/heat2x.png'
import calendar from '../assets/calendar@2x.png'
import thermo from '../assets/download-removebg-preview.png'
import water_tap from '../assets/water-tap.png'
import water_heater from '../assets/newez.png'
import switch_on from '../assets/switch-on.png'
import switch_off from '../assets/switch-off.png'
import Chart from './chart'
import Grid from '@material-ui/core/Grid';
import 'date-fns';
import DateTimePicker from 'react-datetime-picker';
import DateFnsUtils from '@date-io/date-fns';
import Donut from './knob.js'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

// import DateFnsUtils from '@date-io/date-fns';
// import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

import {

    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import Spinner from './spinner.js'

class Schedule extends Component {
    
    constructor() {
        super();
        this.state = {
            loggedIn: true,
            date: new Date(),
            value:'Pilot',
            Open:false,
            // temprature:35
            swing: 'off'
        }
        this.setTemp=this.setTemp.bind(this)
    }

    setTemp(e){
    var value=e
    this.setState({value})
    }
    handleDialog() {
        this.setState({ Open: !this.state.Open })

    }
    render() {




        return (
            <Container className='overflow' >



                <Grid container className="justify-center">
                    {/* <Grid md={12} xs={12} lg={6}>

                        <div className="schedule-temp">

                            <div className='center'>
                                <div className='center'>
                                    <h4 style={{ marginBottom: 0, marginTop: '20px' }} className="regular font-small-h bold white">Set Temperature</h4>
                                    <img src={heat} className="on_off-icon" />

                                </div>
                                <div style={{ alignItems: 'center' }} className='flex flex-direction-col'>
                                    <input placeholder="35 &#8451;" onfocus="this.type='number';" className="number-input font-small-h bold center" type='number'></input>
                                    <button style={{ marginTop: '20px' ,color:'#333333'}} class='btn-turn-on'>Save</button>
                                </div>
                            </div>
                        </div>
                    </Grid> */}

                    <Grid md={12} xs={12} lg={6}>

                        <div className="schedule-time">



                            <div className='center'>
                                <div className='center'>
                                    <h4 style={{ marginBottom: 0, marginTop: '20px' }} className="regular font-small-h bold ">Set Temperature</h4>
                                    <img src={calendar} className="on_off-icon" />

                                </div>
                                <div style={{ alignItems: 'center' }} className='flex flex-direction-col'>
                                    <div className='flex'>
                                    <h4 style={{ marginBottom: 0, marginTop: '20px' , width:128,textAlign:'justify' }} className="regular font-small-h bold ">On Time:
                              
                                    </h4>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                        <KeyboardTimePicker
                                            margin="normal"
                                            id="time-picker"
                                            minutesStep={15}
                                            value={this.state.date}
                                            onChange={e=>this.setState({date:e})}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                                        />



                                        </MuiPickersUtilsProvider>
                                    </div>
                                    <div className='flex'>
                                    <h4 style={{ marginBottom: 0, marginTop: '20px',  width:128,textAlign:'justify' }} className="regular font-small-h bold ">Set Time:
                                    
                                    </h4> 
            
    
    
                                    <Spinner />
                                    {/* <input  style={{ width: '225px', border: 'none',background: 'inherit',borderBottom: '1px solid rgb(133, 133, 133)'}} type='number' min='15' defaultValue={15} autofocus="autofocus" step={15} /> */}
                                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                            <KeyboardTimePicker
                                                margin="normal"
                                                id="time-picker"
                                             
                                                value={this.state.date}

                                                KeyboardButtonProps={{
                                                    'aria-label': 'change time',
                                                }}
                                            />



                                        </MuiPickersUtilsProvider> */}
                                    </div>
                                    <div style={{position:'relative',background: 'unset'}}  className='flex'>
                                     <img style={{position:'absolute',top:'25%',left:'25%'}} src={thermo} className="class-icon" />

                                    <input style={{marginTop:'12px',marginBottom:'10px', marginLeft:'20px',background:'unset'}}  value={this.state.value} onfocus="this.type='number';" className="number-input font-small-h bold center"  disabled></input>
                                    <div style={{marginTop:'10px',marginBottom:'10px',position:'absolute',top:'30%',left:'55%',fontSize:'18px',fontWeight:'bold',color:'red'}}  placeholder="&#8451;"  disabled></div>

                                    </div>
                                    

                                    <button onClick={e=>this.handleDialog()} class='btn-turn-on'>Set Temperature</button>
                                   
                                
                                    
                                       


                                </div>
                                <button style={{ marginTop: '20px',color:'#333333' }} class='btn-turn-on'>ADD</button>

                            </div>

                        </div>
                    </Grid>


                </Grid>

                <Dialog className="dialog" fullWidth="true" open={this.state.Open} onClose={() => {
                    this.handleDialog()

                }} aria-labelledby="form-dialog-title">

                    <div style={{background:'#333'}}>
                    <h3 style={{marginTop:'10px'}} className="center main-color regular" >Set Temperature</h3>

                <DialogContent>
                    <div className="flex-justify center">
                
                    {/* <Donut setTemp={this.setTemp} /> */}
                    <div id="c">

                        <div id="b">
                        <div class='labels'>
                            <p onClick={e => this.setState({ swing: 'off',value:'Off' })} style={{
                            position: 'absolute',
                            top: '-42px',
                            right: '105px',
                            cursor:'pointer'
                            }}>Off</p>



                            <p onClick={e => this.setState({ swing: 'piolt' , value:'Pilot' })} style={{
                            position: 'absolute',

                            right: '-15px',
                            cursor:'pointer'
                            }}>Pilot</p>

                            <p onClick={e => this.setState({ swing: 'warm' , value:'Warm'})} style={{
                            position: 'absolute',
                            top: '90px',
                            right: '-50px',
                            cursor:'pointer'
                            }}>Warm</p>

                            <p onClick={e => this.setState({ swing: 'Vwarm', value:'V. Warm' })} style={{
                            position: 'absolute',
                            top: '180px',
                            right: '-45px',
                            cursor:'pointer'
                            }}>V.Warm</p>

                            <p onClick={e => this.setState({ swing: 'hot',value:'Hot' })} style={{
                            position: 'absolute',
                            top: '240px',
                            right: '105px',
                            cursor:'pointer'
                            }}>Hot</p>


                        </div>

                        {this.state.swing == 'off' && <img className='knob_off' src='/knob.png'></img>}
                        {this.state.swing == 'piolt' && <img className='knob_pilot' src='/knob.png'></img>}
                        {this.state.swing == 'warm' && <img className='knob_warm' src='/knob.png'></img>}
                        {this.state.swing == 'Vwarm' && <img className='knob_vwarm' src='/knob.png'></img>}
                        {this.state.swing == 'hot' && <img className='knob_hot' src='/knob.png'></img>}



                        </div>
                        </div>

                    

                    </div>

                </DialogContent>
                <DialogActions style={{justifyContent:'center'}} className="dialog-btns">
                
                </DialogActions>
                    </div>

                   

                
                </Dialog>






            </Container >


        );
    }
}

export default Schedule;