import React, { Component } from 'react'
import styles from './sidebar.module.css'
import Beverages from './Beverages'
import CookingIngredients from './CookingIngredients'
import SidebarPanel from './SidebarPanel'
import HomeCare from './HomeCare'
import PersonalCare from './PersonalCare'
import ReadyToEat from './ReadyToEat'
import WetMarket from './WetMarket'

import './sidebarAnimation.css'

class Sidebar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show: this.props.show,
             first: this.props.firstSidebar
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

    componentDidMount(){
        let body = document.getElementsByTagName('body')[0]
        let html = document.getElementsByTagName('html')[0]

        if(this.state.show){
            body.style.overflow = 'hidden';
            html.style.overflow = 'hidden';
            setTimeout(() => {
                document.getElementById('sidebarBackground').classList.add('show')
                document.getElementById('sidebarPanel').classList.add('show')
            }, 1)
        }
        else if(this.state.first){
            return
        }
        else{
            setTimeout(() => {
                document.getElementById('sidebarBackground').classList.remove('show')
                document.getElementById('sidebarPanel').classList.remove('show')
                body.style.overflow = 'visible';
                html.style.overflow = 'visible';
            },1)
        }
    }

    render() {
        let show = (this.state.first || this.state.show)? '':'show'

        return (
            <div className={`sidebarBackground ${show}`} id="sidebarBackground">
                <div className={`sidebarPanel ${show}`} id='sidebarPanel'>
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
                                <HomeCare clickHandler={this.clickHandler}/>
                            </ul>
                        </li>

                        <li><span className={styles.span} onClick={this.clickHandler}>PERSONAL CARE</span>
                            <ul className={`${styles.ul} none`}>
                                <PersonalCare clickHandler={this.clickHandler}/>
                            </ul>
                        </li>     

                        <li><span className={styles.span} onClick={this.clickHandler}>READY TO EAT</span>
                            <ul className={`${styles.ul} none`}>
                                <ReadyToEat clickHandler={this.clickHandler}/>
                            </ul>
                        </li>   

                        <li><span className={styles.span} onClick={this.clickHandler}>WET MARKET</span>
                            <ul className={`${styles.ul} none`}>
                                <WetMarket clickHandler={this.clickHandler}/>
                            </ul>
                        </li>      
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar
