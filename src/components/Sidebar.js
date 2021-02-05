import React, { Component } from 'react'
import './sidebarAnimation.css'
import SidebarMobile from './SidebarMobile'
import SidebarPC from './SidebarPC'

class Sidebar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(window.innerWidth)
        if(window.innerWidth < 1024)
            return <SidebarMobile show={this.props.show} firstSidebar={this.props.firstSidebar} />
        return <SidebarPC show={this.props.show} firstSidebar={this.props.firstSidebar} />
    }
}

export default Sidebar
