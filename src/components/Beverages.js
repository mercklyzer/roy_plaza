import React, { Component } from 'react'
import styles from './sidebar.module.css'


class Beverages extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            beverages : ['ALCOHOLIC',
            'BOTTLED WATER',
            'CHOCOLATE',
            'COFFEE',
            'CREAMER',
            'ENERGY DRINKS',
            'HERBAL DRINKS',
            'JUICE',
            'JUICE (POWDER)',
            'MILK (ADULT)',
            'MILK (INFANT)',
            'MILK (NURSING MOM)',
            'MILK (REGULAR)',
            'RTD (CHOCO)',
            'RTD (MILK)',
            'SOFTDRINK',
            'TEA',
            'WINES',
            ] 
        }
    }

    clickHandlerCaller = (e) => {
        this.props.clickHandler(e)
    }

    hoverHandlerCaller = (e) => {
        this.props.hoverHandler(e)
    }
    
    render() {
        let beverages = this.state.beverages
        let html = ''
        return ( <>
        {beverages.map((element) => {
            return (<React.Fragment key={element}><li><span className={styles.span} onClick={this.clickHandler}>{element}</span></li></React.Fragment>)
        })}
        </>)
        
    }
}

export default Beverages
