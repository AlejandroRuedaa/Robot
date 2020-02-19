import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import InputBox from './components/InputBox.js'
import GoodRobot from './components/GoodRobot.js'
import BadRobot from './components/BadRobot.js'
import KanyeRobot from './components/KanyeRobot.js'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : "",
            blab : ""
        }
    }
    handleChange = (e) => {
        this.setState({ name: e.target.value})
        let blabArr = ["B","L","A"]
        let newBlab = e.target.value.split("")
        newBlab = newBlab.map((value, index) => {
            return blabArr[index%3]
        })
        this.setState({blab: newBlab.join("")})


    }


    render(){
        return(
            <div>
            < Header />
            < InputBox name={ this.state.name } handleChange = { this.handleChange }/>
            <GoodRobot name={ this.state.name}/>
            <BadRobot blab={ this.state.blab }/>
            <KanyeRobot name={ this.state.name}/>

                </div>
        )
    }
}

export default App;
