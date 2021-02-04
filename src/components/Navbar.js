import React, { Component } from 'react'
import brand from './images/roy_plaza_store_online_logo.svg'
import smallBrand from './images/small_logo.png'
import search from './images/search_button.svg'
import cart from './images/shopping_cart_icon.svg'
import bell from './images/bell_icon.svg'
import user from './images/user_profile_icon.svg'
import styles from './navbar.module.css'
import './hamburger.css'
import Sidebar from './Sidebar'

class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             searchBody : '',
             toggle: '',
             show: false,
        }
        this.searchInputTop = React.createRef()
        this.searchInputBottom = React.createRef()

        this.cancelHandlerTop = this.cancelHandlerTop.bind(this)
        this.cancelHandlerBottom = this.cancelHandlerBottom.bind(this)
        this.hamburgerToggle = this.hamburgerToggle.bind(this)
    }
    
    cancelHandlerTop(){
        this.searchInputTop.current.value = ''
    }

    cancelHandlerBottom(){
        this.searchInputBottom.current.value = ''
    }

    hamburgerToggle(e){
        let value = this.state.toggle === ''? 'open' : ''
        let showValue = value === 'open'? true : false

        this.setState({
            toggle: value,
            show: showValue
        })
    }


    searchOnChangeHandler = (e) => {
        this.setState({
            searchBody: e.target.value
        })
    }


    render() {
        return (
            <div className={styles.navbar}>
                <div className={styles.navbarTop}>
                    <div className={styles.hamBrandContainer}>
                        <div id="nav-icon3" className={this.state.toggle} onClick={this.hamburgerToggle}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={styles.brandContainer}>
                            <a href="#"><img src={brand} className={styles.brand}/></a>
                            <a href="#"><img src={smallBrand} className={styles.smallBrand}/></a>
                        </div>
                    </div>


                    <form className={styles.formTop}>
                        <input type="text" placeholder="Search in ROY Plaza Store Online" ref={this.searchInputTop} className={styles.input} value={this.state.searchBody} onChange={this.searchOnChangeHandler}/>
                        <span className={styles.cancel} onClick={this.cancelHandlerTop}>x</span> 
                        <button className={styles.searchButton}><img src={search} className={styles.searchImage} /></button>
                    </form>

                    <div className={styles.buttonsContainer}>
                        <a href="#"><img src={cart} /></a>
                        <a href="#"><img src={bell} /></a>
                        <a href="#"><img src={user} /></a>
                    </div>
                </div>
                
                <div className={styles.navbarBottom}>
                    <form className={styles.formBottom}>
                        <input type="text" placeholder="Search in ROY Plaza Store Online"  ref={this.searchInputBottom} className={styles.input}value={this.state.searchBody} onChange={this.searchOnChangeHandler}/>
                        <span className={styles.cancel} onClick={this.cancelHandlerBottom}>x</span> 
                        <button className={styles.searchButton}><img src={search} className={styles.searchImage} /></button>
                    </form>
                </div>

                {/* SIDEBAR IS CODED - MOBILE FIRST from 320px width */}
                <Sidebar key={this.state.show} show={this.state.show}/>
            </div>
        )
    }
}

export default Navbar
