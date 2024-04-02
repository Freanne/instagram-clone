import { Grid } from "@mui/material";
import { Component } from "react";
import inst_image from '../../images/creenshot-removebg-preview.png'
import inst_logo from '../../images/insta-1-removebg-preview.png'
import facebk_image from '../../images/facebook.jpg'
import './LoginPage.css'
import appstore from '../../images/app-2-r.png'
import playstore from '../../images/play.png'
class LoginPage extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                            <div className="loginpage__main">
                                <div style={{margin:0}}>
                                    <img src={inst_image} alt="" width="400px"/>
                                </div>

                                <div>
                                    <div className=" loginpage__rightcomponent">
                                        <img src={inst_logo} alt="" className="loginpage__logo"/>

                                        <div>
                                            <div className="loginpage__signin">
                                                <input className="loginpage__text" type="text" placeholder="Num, téléphone, nom d'utilisateur ou e-mail" />
                                                <input className="loginpage__text" type="password" placeholder="Mot de passe" />
                                                <button className="loginpage__button"> Se connecter </button>
                                            </div>
                                        </div>

                                        <div className="login__ordiv"> 
                                            <div className="login__divider"></div>
                                            <div className="login__or"> OU </div>
                                            <div className="login__divider"></div>
                                        </div>

                                        <div  className="loginpage__fb">
                                            <div className="loginpage_fb1">
                                                <img src={facebk_image} alt="" width={15} style={{marginRight:"5px"}} />
                                                 Se connecter avec Facebook
                                            </div>  
                                            <div className="login__forgot">Forgot Password?</div>
                                           
                                        </div >

                                        
                                    </div>

                                    <div className="loginpage__signupoption">
                                            <div className="loginpage__signin">
                                            Vous n’avez pas de compte ? Inscrivez-vous
                                            </div>
                                            <div className="loginpage__downloadSection">
                                               <div>
                                               Get the app.
                                               </div>
                                               <div className="loginpage__option">
                                                    <img className="loginpage__dwing" src={appstore} alt="" width={106} />
                                                    <img className="loginpage__dwing" src={playstore} alt="" width={116} />
                                                </div>
                                            </div>
                                        </div>

                                        
                                    
                                </div>
                                
                            </div>
                            
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
              
            </div>
        )
    }
}

export default LoginPage