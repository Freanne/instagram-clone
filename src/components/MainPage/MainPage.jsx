import { Component } from "react";
import './MainPage.css'
import { Grid } from "@mui/material";
import Post from "../Post/Post";

class MainPage extends Component{
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
              
              <Post/>
            </div>
        )
    }
}

export default MainPage