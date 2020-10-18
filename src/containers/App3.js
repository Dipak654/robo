import React, {Component} from 'react'
// import {robots} from './robots'
import CardList1 from '../components/CardList1'
import Searchbox from '../components/Searchbox'
import Scroll from '../components/Scroll'
import  '../containers/App.css'


class App3 extends Component {
    constructor () {
        super()
        this.state = {
            robots: [],
            searchfield : ''
        }
        console.log('constructor')
    }


    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }
    
    
        componentDidMount() {
            setTimeout(() => {
                fetch('https://jsonplaceholder.typicode.com/users').then( response =>   response.json()
            ).then( users => this.setState({ robots: users}))
            }, 3000);
            
        }
    
    
    render () {
        const { robots, searchfield} = this.state;
        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return !robots.length ?
             <h1 className='tc'> Loading.....</h1> :
             (
                <div className= 'tc'>
                    <h1>RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList1 robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        }
    }


export default App3;