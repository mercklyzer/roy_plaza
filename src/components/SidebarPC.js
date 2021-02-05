import React, { Component } from 'react'
import styles from './sidebar.module.css'
import Beverages from './Beverages'
import CookingIngredients from './CookingIngredients'
import HomeCare from './HomeCare'
import PersonalCare from './PersonalCare'
import ReadyToEat from './ReadyToEat'
import WetMarket from './WetMarket'

class SidebarPC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            show: this.props.show,
            first: this.props.firstSidebar
       }
    }

    hoverHandler(e){
        let tag = e.currentTarget
        console.log(tag)
        let div = tag.firstChild.nextSibling
        console.log(div)
        div.classList.add('show')    //show panel

        let ul = div.firstChild
        ul.classList.remove('none')
        
        console.log("hovered")      
    }

    hoverRemoveHandler(e){
        let tag = e.currentTarget
        
        let div = tag.firstChild.nextSibling
        div.classList.remove('show')    //show panel

        let ul = div.firstChild
        ul.classList.add('none')
        
        console.log("hovered") 
    }

    // to hide/show sidebar upon hamburger click
    componentDidMount(){
        let body = document.getElementsByTagName('body')[0]
        let html = document.getElementsByTagName('html')[0]

        if(this.state.show){
            body.style.overflow = 'hidden';
            html.style.overflow = 'hidden';
            setTimeout(() => {
                document.getElementById('sidebarBackground').classList.add('show')
                document.getElementById('sidebarPanel1').classList.add('show')
            }, 1)
        }
        else if(this.state.first){
            console.log("first")
            return
        }
        else{
            setTimeout(() => {
                document.getElementById('sidebarBackground').classList.remove('show')
                document.getElementById('sidebarPanel1').classList.remove('show')
                body.style.overflow = 'visible';
                html.style.overflow = 'visible';
            },1)
        }
    }

    render() {
        let show = (this.state.first || this.state.show)? '':'show'
        return (
            <div className={`sidebarBackground ${show}`} id="sidebarBackground">
                <div className={`sidebarPanel1 ${show}`} id="sidebarPanel1">
                    <ul className={styles.ul}>
                        <li onMouseOver={this.hoverHandler} onMouseOut={this.hoverRemoveHandler}>
                            <span className={styles.span}>BEVERAGES</span>
                            <div className={`sidebarPanel2 ${show}`}>
                                <ul className={`${styles.ul} none`}>
                                    <Beverages hoverHandler={this.hoverHandler} hoverRemoveHandler={this.hoverRemoveHandler}/>
                                </ul>
                            </div>
                        </li>
                        
                        <li onMouseOver={this.hoverHandler} onMouseOut={this.hoverRemoveHandler}>
                            <span className={styles.span}>COOKING INGREDIENTS</span>
                            <div className={`sidebarPanel2 ${show}`}>
                                <ul className={`${styles.ul} none`}>
                                    <CookingIngredients hoverHandler={this.hoverHandler} hoverRemoveHandler={this.hoverRemoveHandler}/>
                                </ul>
                            </div>
                        </li>


                        <li onMouseOver={this.hoverHandler} onMouseOut={this.hoverRemoveHandler}>
                            <span className={styles.span} >HOME CARE</span>
                            <div className={`sidebarPanel2 ${show}`}>
                                <ul className={`${styles.ul} none`}>
                                    <HomeCare hoverHandler={this.hoverHandler} hoverRemoveHandler={this.hoverRemoveHandler}/>
                                </ul>
                            </div>
                        </li>
                        <li onMouseOver={this.hoverHandler} onMouseOut={this.hoverRemoveHandler}>
                            <span className={styles.span} >PERSONAL CARE</span>
                            <div className={`sidebarPanel2 ${show}`}>
                                <ul className={`${styles.ul} none`}>
                                    <PersonalCare hoverHandler={this.hoverHandler} hoverRemoveHandler={this.hoverRemoveHandler}/>
                                </ul>
                            </div>
                        </li>
                        <li onMouseOver={this.hoverHandler} onMouseOut={this.hoverRemoveHandler}>
                            <span className={styles.span}>READY TO EAT</span>
                            <div className={`sidebarPanel2 ${show}`}>
                                <ul className={`${styles.ul} none`}>
                                    <ReadyToEat hoverHandler={this.hoverHandler} hoverRemoveHandler={this.hoverRemoveHandler}/>
                                </ul>
                            </div>
                        </li>
                        <li onMouseOver={this.hoverHandler} onMouseOut={this.hoverRemoveHandler}>
                            <span className={styles.span}>WET MARKET</span>
                            <div className={`sidebarPanel2 ${show}`}>
                                <ul className={`${styles.ul} none`}>
                                    <WetMarket hoverHandler={this.hoverHandler} hoverRemoveHandler={this.hoverRemoveHandler}/>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SidebarPC
