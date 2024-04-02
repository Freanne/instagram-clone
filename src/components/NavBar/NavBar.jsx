import { Component } from "react";
import './NavBar.css'
import { Avatar, Grid } from "@mui/material";
import instaLogo from '../../images/insta-1-removebg-preview.png'
import HomeIcon from '@mui/icons-material/Home';
//import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import home from '../../images/home-4.png'
import message from '../../images/facebook-messenger.png'
 import find from '../../images/decouverte.png'
// import real from '../../images/reel.png'
import db from '../../images/IMG_7582.jpg'
class NavBar extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            password:''
        }
    }
    render(){
        return(
            <div>
                <div className="navbar__barContent">
                        <Grid container>
                            <Grid item xs={2}>

                            </Grid>
                            <Grid item xs={3}>
                                <img className="navbar_logo" src={instaLogo} alt="" width="105px" />
                            </Grid>
                            <Grid item xs={3}>
                                <input type="text" className="navbar__searchBar" name="" id="" placeholder="Search"/>
                            </Grid>
                            <Grid item xs={3} style={{display:'flex'}}>
                                <HomeIcon className="navbar_img"/>
                                
                                <img src={message} alt="" width="25px" className="navbar_img"/> 
                                <img src={find} alt="" width="25px" className="navbar_img" />
                                <FavoriteBorderIcon className="navbar_img"/>
                                {/* <img src={real} alt="" /> */}
                                {/* <SearchIcon className="navbar_img"/> */}
                                <Avatar 
                                    className="navbar_img" 
                                    src= {db}
                                    style={{maxHeight:'25px', maxWidth:"25px"}}
                                />
                            </Grid>
                            <Grid item xs={1}>

                            </Grid>
                        </Grid>
                </div>
            </div>
        )
    }
}

export default NavBar;