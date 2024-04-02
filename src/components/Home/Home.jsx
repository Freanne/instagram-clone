import { Component } from "react";
import './Home.css'
import NavBar from '../NavBar/NavBar'
import MainContent from "../MainContent/MainContent";
class Home extends Component{
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
                <NavBar/>
                <MainContent/>
            </div>
        )
    }
}

export default Home;