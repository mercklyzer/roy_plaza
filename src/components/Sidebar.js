import React, { Component } from 'react'
import styles from './sidebar.module.css'
import Beverages from './Beverages'
import CookingIngredients from './CookingIngredients'
import SidebarPanel from './SidebarPanel'

export class Sidebar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show: this.props.show,
             beverages: ['ALCOHOLIC',
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
             ],

             cookingIngredients: [
                'BAKING INGREDIENTS',
                'CANNED FOODS',
                'CONDIMENTS',
                'PASTA & GRAINS',
                'SAUCES',
                'SPICES & HERBS',
             ]
        }
    }

    clickHandler(e){
        let element = e.currentTarget.parentNode
        let siblings = []

        let sibling = element.parentNode.firstChild
        while(sibling){
            if (sibling !== element) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling;
        }   
        // siblings now contain all siblings to be deleted
        siblings.forEach((element) => {
            element.classList.add('none')       //hide all siblings
        })

        //show siblings of the event element
        e.currentTarget.parentElement.children[1].classList.remove('none')

        //hide the current node
        e.currentTarget.classList.add('none')
    }


    render() {
        let body = document.getElementsByTagName('body')[0]
        let html = document.getElementsByTagName('html')[0]

        if(!this.state.show){
            body.style.overflow = 'visible';
            html.style.overflow = 'visible';
            return  <></>
        }    
        
        body.style.overflow = 'hidden';
        html.style.overflow = 'hidden';

        let beverages = this.state.beverages
        let cookingIngredients = this.state.cookingIngredients

        return (
            <div className={styles.background}>
                <div className={styles.panel}>
                    <ul className={styles.ul}>
                        <li><span className={styles.span} onClick={this.clickHandler}>BEVERAGES</span>
                            <ul className={`${styles.ul} none`}>
                                <Beverages clickHandler={this.clickHandler}/>
                            </ul>
                        </li>
                        <li><span className={styles.span} onClick={this.clickHandler}>COOKING INGREDIENTS</span>
                            <ul className={`${styles.ul} none`}>
                                <CookingIngredients clickHandler={this.clickHandler}/>
                            </ul>
                        </li>    

                        <li><span className={styles.span} onClick={this.clickHandler}>HOME CARE</span>
                            <ul className={`${styles.ul} none`}>
                                <li><span className={styles.span}>F1</span>
                                    <ul className={`${styles.ul} none`}>
                                        <li><span className={styles.span}>F1A</span></li>
                                        <li><span className={styles.span}>F1B</span></li>
                                    </ul>
                                </li>
                                <li><span className={styles.span}>F2</span>
                                    <ul className={`${styles.ul} none`}>
                                        <li><span className={styles.span}>F2A</span></li>
                                        <li><span className={styles.span}>F2B</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>                       
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar
