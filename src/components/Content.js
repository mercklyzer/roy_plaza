import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import SearchItem from './SearchItem'

class Content extends Component {
    
    
    render() {
        const divStyle = {
            color: 'black',
            marginTop: '72px',
            fontSize: '60px',
            minHeight: '780px'
        }
        return (
            <div style={divStyle}>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/search' exact component={SearchItem} />
                    <Route path='/search/:item' component={SearchItem} />
                </Switch>
            </div>
        )
    }
}

export default Content
