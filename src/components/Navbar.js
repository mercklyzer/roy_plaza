import React, { Component } from 'react'
import brand from './images/roy_plaza_store_online_logo.svg'
import search from './images/search_button.svg'
import cart from './images/shopping_cart_icon.svg'
import bell from './images/bell_icon.svg'
import user from './images/user_profile_icon.svg'
import styles from './navbar.module.css'

class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             searchBody : ''
        }
        this.searchInputTop = React.createRef()
        this.searchInputBottom = React.createRef()
        this.cancelHandlerTop = this.cancelHandlerTop.bind(this)
        this.cancelHandlerBottom = this.cancelHandlerBottom.bind(this)
    }
    
    cancelHandlerTop(){
        this.searchInputTop.current.value = ''
    }

    cancelHandlerBottom(){
        this.searchInputBottom.current.value = ''
    }

    searchOnChangeHandler = (e) => {
        this.setState({
            searchBody: e.target.value
        })
    }


    render() {
        return (
            <div className={styles.Navbar}>
                <div className={styles.navbarTop}>
                    <a href="#"><img src={brand} className={styles.brand}/></a>

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
            </div>
        )
    }
}

export default Navbar
