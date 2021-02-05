import React, { Component } from 'react'
import styles from './sidebar.module.css'

let personalCare = [
    'BODY CARE',
    'COSMETICS',
    'HAIR CARE',
    'HEALTH CARE',
    'ORAL CARE',
]

let bodyCare = [
    'BABY OIL',
    'BODY CARE SOLUTIONS',
    'BODY SPRAYS',
    'BODY WASH',
    'DEODORANTS',
    'FEMININE WASH',
    'LOTION',
    'NAIL ACCESSORIES',
    'NAIL POLISH',
    'NAPKINS',
    'PANTYLINERS',
    'SHAVE',
    'SOAP (BEAUTY)',
    'SOAP (GERMICIDAL)',
    'SOAP (MILD)',
]

let cosmetics = [
    'ASTRINGENT',
    'BLUSH ON',
    'CLARIFYING LOTION',
    'COSMETIC KITS',
    'EYE LINERS/SHADOWS',
    'EYE MASCARA',
    'FACE CARE',
    'FACIAL CLEANSER',
    'FACIAL CREAM',
    'LIP CARE',
    'POWDER',
]

let hairCare = [
    'COMB & CURLERS',
    'CONDITIONER',
    'HAIR COLOR',
    'HAIR STYLING',
    'HAIR TREATMENT',
    'KERATIN OIL',
    'MINERAL OIL',
    'SHAMPOO',
    'SHAMPOO ANTI DANDRUFF',
    'SHAMPOO BABY',
    'SHAMPOO TREATMENT',
]

let healthCare = [
    'ALCOHOL',
    'BABY ESSENTIALS',
    'BABY OIL',
    'COTTON',
    'COTTON BUDS',
    'DIAPERS',
    'DIETARY SUPPLIMENTS',
    'EYE CARE',
    'FIRST AID',
    'HEALTH GADGETS',
    'MEDICINE',
    'OILS & OINTMENTS',
    'TISSUE',
]

let oralCare = [
    'DENTAL FLOSS',
    'MOUTHWASH',
    'TOOTHBRUSH',
    'TOOTHPASTE',
]

class PersonalCare extends Component {
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
                {personalCare.map((element) => {
                    if(element === 'BODY CARE'){
                        innerItems = bodyCare.map((element) => {
                            return <React.Fragment key={element}><li><span className={styles.span}>{element}</span></li></React.Fragment>
                        })                        
                    }

                    else if(element === 'COSMETICS'){
                        innerItems = cosmetics.map((element) => {
                            return <React.Fragment key={element}><li><span className={styles.span}>{element}</span></li></React.Fragment>
                        })                        
                    }

                    else if(element === 'HAIR CARE'){
                        innerItems = hairCare.map((element) => {
                            return <React.Fragment key={element}><li><span className={styles.span}>{element}</span></li></React.Fragment>
                        })                        
                    }
                    
                    else if(element === 'HEALTH CARE'){
                        innerItems = healthCare.map((element) => {
                            return <React.Fragment key={element}><li><span className={styles.span}>{element}</span></li></React.Fragment>
                        })                        
                    }

                    else if(element === 'ORAL CARE'){
                        innerItems = oralCare.map((element) => {
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

export default PersonalCare
