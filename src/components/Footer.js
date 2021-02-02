import React, { Component } from 'react'

import tiktok from './images/tiktok_link_white.svg'
import youtube from './images/youtube_link_white.svg'
import instagram from './images/instagram_link_white.svg'
import facebook from './images/facebook_link_white.svg'

import styles from './footer.module.css'

import bistro from './images/roy-plaza-store-roys-bistro-white-logo.svg'
import bakebites from './images/roy-plaza-store-bakebites-bakeshop-white.svg'
import plaza from './images/roy-plaza-store-roy-plaza-logo.svg'
import powered from './images/roy-plaza-store-powered-by.svg'

class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
                <div className={styles.title}>ROY Plaza Store Online</div>
                <div className={styles.flex}>
                    <div className={styles.subItem}>
                        <a href="#" className={styles.link}>About Us</a>
                        <a href="#" className={styles.link}>Contact Us</a>
                        <a href="#" className={styles.link}>Terms & Conditions</a>
                        <a href="#" className={styles.link}>FAQs</a>
                    </div>
                    <div className={styles.subItem}>
                        <a href="#" className={styles.link}>Help</a>
                        <a href="#" className={styles.link}>ROY Plaza Corporation</a>
                        <a href="#" className={styles.link}>Company Page</a>
                        <a href="#" className={styles.link}>Career</a>
                    </div>
                </div>
                <div className='container'>
                    <a href="#"><img src={facebook} className={styles.icon}/></a>
                    <a href="#"><img src={instagram} className={styles.icon}/></a>
                    <a href="#"><img src={youtube} className={styles.icon}/></a>
                    <a href="#"><img src={tiktok} className={styles.icon}/></a>
                </div>
                <div className={`${styles.flex} ${styles.bottomLine}`}>
                    <div className={`${styles.flex} ${styles.companyContainer}`}>
                        <a href="#"><img src={bistro} className={styles.companyIcon}/></a>
                        <a href="#"><img src={bakebites} className={styles.companyIcon}/></a>
                        <a href="#"><img src={plaza} className={styles.companyIcon}/></a>
                    </div>
                    <div>
                    <a href="#"><img src={powered} className={styles.companyIcon}/></a>
                    </div>
                </div>
                <div className={styles.designer}>
                    Powered by: RoyalTech
                </div>
            </div>
        )
    }
}

export default Footer
