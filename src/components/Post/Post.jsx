import { Component } from "react";
import './Post.css'
import { Grid } from "@mui/material";

class Post extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            password:''
        }
    }
    render(){
        return(
            <div className="post__container">
                {Header}
                
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}

export default Post