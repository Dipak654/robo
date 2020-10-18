import React, { Component } from 'react';
import Searchbox from './Searchbox';
import CardList from './CardList';
import {robots} from './robots';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange=(event)=> {
        this.setState({searchfield: event.target.value})
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots  =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })    
        // console.log(filteredRobots)
            return (
            
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <Searchbox 
                    searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots}/>
                </div>
            
    )
    }
}

export default App;