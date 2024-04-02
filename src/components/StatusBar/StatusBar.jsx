import { Component } from "react";
import './StatusBar.css'
import { Avatar, Grid } from "@mui/material";
import statusimg from '../../images/IMG_7582.jpg'
class StatusBar extends Component{
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
               <div className="statusbar__container">
                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg}/>
                        <div className="statusbar_text">Anne-Marie</div>
                    </div>

                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg}/>
                        <div className="statusbar_text">Anne-Marie</div>
                    </div>

                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg}/>
                        <div className="statusbar_text">Anne-Marie</div>
                    </div>

                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg}/>
                        <div className="statusbar_text">Anne-Marie</div>
                    </div>

               </div>
            </div>
        )
    }
}

export default StatusBar