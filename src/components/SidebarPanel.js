import React, { Component } from 'react'
import styles from './sidebarPanel.module.css'

export class SidebarPanel extends Component {
    constructor(props) {
        super(props)
    
    }
    
    updatePanelCaller = (e) => this.props.updatePanel(e)

    render() {
        console.log(this.props.items)
        return (
            <div className={styles.panel}>
                <div className={styles.title}>{this.props.title}</div>
                <div className={styles.itemContainer}>
                    {this.props.items.map((item, index) => 
                            <React.Fragment key={item}>
                                <a href="#" className={styles.item} value={item} onClick={this.updatePanelCaller}>{item}</a>
                            </React.Fragment>

                    )}
                </div>
            </div>
        )
    }
}

export default SidebarPanel
