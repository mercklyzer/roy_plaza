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
        this.props.clickHandler(e)
        console.log("clicked")
    }

    render() {
        let innerItems = ''

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

export default ReadyToEat
