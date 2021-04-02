import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link, Redirect } from 'react-router-dom';
import ezgeyserlogo from '../assets/ezGeyser_Logo.png'
import dashboard from '../assets/dashboard.png'
import calendar from '../assets/calendar.png'
import HomeIcon from '@material-ui/icons/Home';

import ScheduleIcon from '@material-ui/icons/Schedule';


const drawerWidth = 300;


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('lg')]: {
            width: drawerWidth,
            flexShrink: 0,
        },

    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },

    },
    menuButton: {
        marginRight: theme.spacing(2),
        zIndex: 1,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: { display: 'flex' },
    drawerPaper: {
        width: drawerWidth,
        background: ' #F58C30'
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: 1,
        padding: theme.spacing(3),
        paddingBottom: 0,
        paddingTop: 40
    }
}));





function ResponsiveDrawer(props) {
    const { container, lang } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [schools, setSchools] = React.useState([]);
    const [selectedItem, setSelectedItem] = React.useState('')
    const [dashClass, setDashClass] = React.useState('')
    const [navigator, setNavigator] = React.useState('')



    useEffect(() => {

    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerClose = () => {
        setMobileOpen(false);
    };

    //   const logout = (props) => {

    //     fire.auth().signOut();
    //     localStorage.removeItem("user")
    //     localStorage.removeItem("userName")
    //     window.location.reload()

    //   }



    const drawer = (
        <div >



            <img className="nav-ezlogo" src={ezgeyserlogo} alt="logo"></img>


            <Divider />

            <List>

                <Link style={{textDecoration:"none"}} to='/'>
                    <div class={navigator == "Dashboard" ? 'navActive' : ""}  >
                        <ListItem onClick={() => {
                            handleDrawerClose()
                            setNavigator('Dashboard')
                        }
                        } button key="Add Items">
                            {/* { addImg && <img className="logoiconsm" src={addgreen} alt="logo"></img>}
                { !addImg && <img className="logoiconsm" src={add} alt="logo"></img>} */}
                            <img src={dashboard} className="nav-icon"></img>
                            <h4 className='nav-text'>Dashboard</h4>
                        </ListItem>
                    </div>
                    </Link>

                    <Link style={{textDecoration:"none"}} to='/schedule/'>
                    <div class={navigator == "Schedule" ? 'navActive' : ""}  >
                        <ListItem onClick={() => {
                            handleDrawerClose()
                            setNavigator('Schedule')
                        }
                        } button key="Add Items">
                            {/* { addImg && <img className="logoiconsm" src={addgreen} alt="logo"></img>}
                { !addImg && <img className="logoiconsm" src={add} alt="logo"></img>} */}
                            <img src={calendar} className="nav-icon"></img>
                            <h4 className='nav-text'>Schedule</h4>
                        </ListItem>
                    </div>
             </Link>

            </List>

           <div className="logoutdiv"  >
                <Divider style={{ backgroundColor: "grey" }} />


               <button className="logoutbtn" onClick={e=>window.location = "/login"} >Logout</button>
            </div>
        </div>
    );

    return (
        <div style={{ background: '#333333' }} className={classes.root}>
            <CssBaseline />
            <div className="menu-button">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <div style={{marginLeft:'10px'}} className="menu-icon"><MenuIcon /></div>
                </IconButton>

            </div>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer

                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer


                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main id='resp-nav' class='flex-direction-col-rev' className={classes.content}>
                <div className={classes.toolbar}>


                            
                <Link style={{textDecoration:"none"}} to='/'>  <div  class='flex'>
                <HomeIcon style={{marginRight:'5px',color:'white'}} color='white' /> <p style={{cursor:'pointer'}} className={navigator == "Dashboard" ? 'white nav-progressbar activeBorder' : "white nav-progressbar"} onClick={e=>{
                        setNavigator('Dashboard')
                        
                     
                }} >Dashboard</p>
                    </div></Link>

<Link style={{textDecoration:"none"}} to='/schedule/'> 

<div  class='flex'>
                <ScheduleIcon style={{marginRight:'5px',color:'white'}} color='white' /> <p style={{cursor:'pointer'}} className={navigator == "Schedule" ? 'white nav-progressbar activeBorder' : 'white nav-progressbar'} onClick={e=>{
                        setNavigator('Schedule')
                       
                }}>Schedule</p>
                    </div>
</Link>


                </div>

                <div className={classes.toolbar}>


                    <p className='white nav-progressbar' >31 Jan 2021</p>

                    <p className='white nav-progressbar' >Ashar@gmail.com</p>


                </div>



            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export { ResponsiveDrawer };