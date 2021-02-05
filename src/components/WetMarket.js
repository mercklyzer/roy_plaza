import React, { Component } from 'react'
import styles from './sidebar.module.css'

let wetMarket = [
    'FRESH PRODUCE',
    'FROZEN FOOD',
    'MEAT & POULTRY',
]

let freshProduce = [
    'FRUITS',
    'VEGETABLES',
]

let frozenFood = [
    'BACON',
    'EMBUTIDO',
    'FRIES',
    'HAM',
    'HOTDOG',
    'ICE',
    'ICE CREAM',
    'LONGANISA',
]

let meatAndPoultry = [
    'BEEF',
    'CHICKEN',
    'DRIED MEATS',
    'EGGS',
    'PORK',
    'PROCESSED FOODS',
    'SEA FOODS',
]

class WetMarket extends Component {
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
                {wetMarket.map((element) => {
                    if(element === 'FRESH PRODUCE'){
                        innerItems = freshProduce.map((element) => {
                            return <React.Fragment key={element}><li><span className={styles.span}>{element}</span></li></React.Fragment>
                        })                        
                    }

                    else if(element === 'FROZEN FOOD'){
                        innerItems = frozenFood.map((element) => {
                            return <React.Fragment key={element}><li><span className={styles.span}>{element}</span></li></React.Fragment>
                        })                        
                    }

                    else if(element === 'MEAT & POULTRY'){
                        innerItems = meatAndPoultry.map((element) => {
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

export default WetMarket
