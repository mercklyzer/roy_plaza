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
        this.props.clickHandler(e)
        console.log("clicked")
    }

    render() {
        let innerItems = ''

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
                        <li>
                            <span className={styles.span} onClick={this.clickHandlerCaller}>{element}</span>
                            <ul className={`${styles.ul} none`}>
                                {innerItems}
                            </ul>
                        </li>
                    </React.Fragment>)
                })}
            </>
        )
    }
}

export default WetMarket
