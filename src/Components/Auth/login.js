import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Row, Col, Form } from 'react-bootstrap'
import bg_img from '../../assets/geyser.png'
import ezgeyserlogo from '../../assets/ezGeyser_Logo.png'
import {Link} from 'react-router-dom'

class loginComponent extends Component {
    constructor() {
        super();
        this.state = {

        }
    }



    render() {


        return (

            <Container fluid >
                <Row className='login-row'>
                    <Col lg={6} md={6}>
                        <Container className='flex justify-center'>
                            <img className="ezlogo" src={ezgeyserlogo}></img>
                        </Container>

                        <Container>

                            <div className="center">

                                <div className="login-container" >
                                    <div className="login-input flex">
                                        {/* <img className="input-icon" src={userEmailImg} alt="userimg" /> */}
                                        <input className="input"
                                            placeholder="Enter Your Email"

                                        />

                                    </div>
                                    <div className="login-input flex">
                                        {/* <img className="input-icon" src={lock} alt="lock" /> */}
                                        <input className="input"
                                            type='password' placeholder="Enter Your Password"

                                        />

                                    </div>
                                    <button className="login-btn" onClick={e=>window.location = "/"} >LOGIN</button>
                                    <p style={{ paddingTop: '20px'  }} className='small-text-login' >Don't have an account click here to <Link to='/register' style={{textDecoration:'none'}}><p className='main-color'>Sign Up</p></Link></p>
                                    <p style={{ paddingTop: '5px' }} className='small-text-login'  >Forget Password ? </p>



                                </div>
                            </div>
                        </Container>
                    </Col>

                    <Col lg={6} md={6} className="main-bg dp-none">
                        <div className='flex justify-center'>
                            <img className="bg-img" src={bg_img}></img>
                        </div>
                        <div className='flex flex-direction-col justify-center'>
                            <h1 className='lg-logo-text'>ezGeyser</h1>
                            <h1 style={{ fontWeight: 'normal' }} className='lg-logo-text'>بچت اور سہولت</h1>

                        </div>
                    </Col>
                </Row>
            </Container>

            // <div className="half-grid-t">

            //     <div className="center naseemlogo">
            //         <h1 className="grey regular login-title" style={{ paddingTop: '100px' }}>Welcome To Naseem Teacher</h1>

            //     </div>


            // </div>
        );

    }
}

export default loginComponent;