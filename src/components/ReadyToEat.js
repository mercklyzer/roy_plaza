import React, { Component } from 'react'
import styles from './sidebar.module.css'
import {Link} from 'react-router-dom'

let readyToEat = [
    'INFANT FOOD',
    'SNACKS & PASTRIES',
]

let infantFood = [
    'CEREALS',
    'CHEESE CUBES'
]

let snacksAndPastries = [
    'BISCUITS',
    'CAKE',
    'CANDIES',
    'CEREALS',
    'CHIPS',
    'CHOCOLATE',
    'CONE',
    'DELICACIES',
    'GELATIN',
    'GUMS',
    'MALLOWS',
    'NUTS',
    'PASTRIES',
    'PROMO PACK',
]


class ReadyToEat extends Component {
    constructor(props) {
        super(props)
    }

    clickHandlerCaller = (e) => {
        if(window.innerWidth >= 1024)    return
        this.props.clickHandler(e)
        console.log("clicked")
    }

    hoverHandlerCaller = (e) => {
        if(window.innerWidth < 1024)    return
        this.props.hoverHandler(e)
        console.log("hover")
    }
    hoverRemoveHandlerCaller = (e) => {
        if(window.innerWidth < 1024)    return
        this.props.hoverRemoveHandler(e)
        console.log("hover")
    }

    render() {
        let innerItems = ''
        let openDiv = (window.innerWidth >= 1024)? `<div className='sidebarPanel3'>` : ''
        let closeDiv =  (window.innerWidth >= 1024)?` </div>` : ''

        return (
            <>
                {readyToEat.map((element) => {
                    if(element === 'INFANT FOOD'){
                        innerItems = infantFood.map((element) => {
                            return (
                                <React.Fragment key={element}>
                                    <li> 
                                        <Link to={`/search/${element}`} style={{textDecoration: 'none', color: 'black'}}>
                                            <span className={styles.span} onClick={this.clickHandler}>
                                                {element}
                                            </span>
                                        </Link>
                                    </li>
                                </React.Fragment>)
                        })
                    }

                    else if(element === 'SNACKS & PASTRIES'){
                        innerItems = snacksAndPastries.map((element) => {
                            return (
                                <React.Fragment key={element}>
                                    <li> 
                                        <Link to={`/search/${element}`} style={{textDecoration: 'none', color: 'black'}}>
                                            <span className={styles.span} onClick={this.clickHandler}>
                                                {element}
                                            </span>
                                        </Link>
                                    </li>
                                </React.Fragment>)
                        })                        
                    }

                    return (
                    <React.Fragment key={element}>
                        <li onMouseOver={this.hoverHandlerCaller} onMouseOut={this.hoverRemoveHandlerCaller}>
                            <span className={styles.span} onClick={this.clickHandlerCaller}>{element}</span>
                            {window.innerWidth >= 1024? 
                                <div className='sidebarPanel3'>
                                    <ul className={`${styles.ul} none`}>
                                        {innerItems}
                                    </ul>
                                </div>
                                :
                                <ul className={`${styles.ul} none`}>
                                        {innerItems}
                                    </ul>
                            }
                        </li>
                    </React.Fragment>)
                })}
            </>
        )
    }
}

export default ReadyToEat
