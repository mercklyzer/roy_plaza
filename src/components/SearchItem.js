import React, { Component } from 'react'
import Item from './Item'
import style from './searchItem.module.css'

class SearchItem extends Component {
    render() {
        console.log("params: " + this.props.match.params.item)
        return (
            <div className={style.parentStyle}>
                {this.props.match.params.item}
                <div className={style.divStyle}>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        )
    }
}

export default SearchItem
