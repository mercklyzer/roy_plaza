import React, { Component } from 'react'
import styles from './sidebar.module.css'
import {Link} from 'react-router-dom'



let homeCare = [
    'CLEANERS',
    'DETERGENTS',
    'PAPER & PACKAGING',
    'PET CARE',
    'TOOLS & GEARS',
]

let cleaners = [
    'AIR FRESHENER',
    'DISHWASHING BAR',
    'DISHWASHING LIQUID',
    'DISHWASHING PASTE',
    'DISINFECTANTS',
    'FLOOR WAX',
    'INSECTICIDE',
    'POLISHERS',
]

let detergents = [
    'BLEACH (LIQUID)',
    'BLEACH (POWDER)',
    'DETERGENT (BAR)',
    'DETERGENT (LIQUID)',
    'DETERGENT (POWDER)',
    'FABRIC CONDITIONER',
    'LAUNDRY STARCH',
    'SOAP BAR',
]

let paperAndPackaging = [
    'BAKING ACCESSORIES',
    'CONTAINERS',
    'DISPOSABLES',
    'FOIL',
    'PAPER PACKAGING',
    'PLASTIC PACKAGING',
]

let petCare = ['SHAMPOO']

let toolsAndGears = [
    'BATTERIES',
    'CANDLES',
    'CONSUMABLES (HOUSEHOLD)',
    'CONSUMABLES (KITCHEN)',
    'ELECTRICAL ACCESSORIES',
    'GEARS',
    'HOUSEHOLD TOOLS',
    'KITCHEN EQUIPMENTS',
    'KITCHEN TOOLS',
    'PARTY ACCESSORIES',
    'SCRUBS',
]

class HomeCare extends Component {
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
                {homeCare.map((element) => {
                    if(element === 'CLEANERS'){
                        innerItems = cleaners.map((element) => {
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

                    else if(element === 'DETERGENTS'){
                        innerItems = detergents.map((element) => {
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

                    else if(element === 'PAPER & PACKAGING'){
                        innerItems = paperAndPackaging.map((element) => {
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
                    
                    else if(element === 'PET CARE'){
                        innerItems = petCare.map((element) => {
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

                    else if(element === 'TOOLS & GEARS'){
                        innerItems = toolsAndGears.map((element) => {
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

export default HomeCare
