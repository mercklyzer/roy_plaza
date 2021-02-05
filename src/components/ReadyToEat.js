import React, { Component } from 'react'
import styles from './sidebar.module.css'

let readyToEat = [
    'INFANT FOOD',
    'SNACKS & PASTRIES',
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
                    if(element === 'INSTANT FOOD'){
                        return <React.Fragment key={element}><li><span className={styles.span}>{element}</span></li></React.Fragment>             
                    }

                    else if(element === 'SNACKS & PASTRIES'){
                        innerItems = snacksAndPastries.map((element) => {
                            return <React.Fragment key={element}><li><span className={styles.span}>{element}</span></li></React.Fragment>
                        })                        
                    }

                    return (
                    <React.Fragment key={element}>
                        <li onMouseOver={this.hoverHandlerCaller} onMouseOut={this.hoverRemoveHandlerCaller}>
                            <span className={styles.span} onClick={this.clickHandlerCaller}>{element}</span>
                            {openDiv}
                                <ul className={`${styles.ul} none`}>
                                    {innerItems}
                                </ul>
                            {closeDiv}
                        </li>
                    </React.Fragment>)
                })}
            </>
        )
    }
}

export default ReadyToEat
