import React, { Component } from 'react'
import item from './images/default-product-image.svg'
import style from './item.module.css'
import plus from './images/roy-plaza-store-online-plus-icon.svg'
import minus from './images/roy-plaza-store-online-minus-icon.svg'

class Item extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: 0,
        }

        this.inputNumber = React.createRef()
    }

    changeValue = (e) => {
        let newValue = 0
        if(e.currentTarget.value > 0){
            newValue = e.currentTarget.value
        }
        this.setState({
            value: newValue
        })
    }
    
    plusHandler = () => {
        this.setState((prev, props) => ({
            value: prev.value + 1
        }))
    }

    minusHandler = () => {
        if(this.state.value <= 0)   return
        this.setState((prev, props) => ({
            value: prev.value - 1
        }))
    }

    sizeButtonHandler = (e) => {
        let parent = e.currentTarget.parentNode
        let children = [...parent.children]

        children.forEach((tag, index) => {
            tag.classList.remove(`${style.active}`)
        })

        e.currentTarget.classList.add(`${style.active}`)
    }

    render() {
        return (
            <div className={style.container}>
                <img src={item} className={style.itemImage}/>
                <div className={style.itemInfo}>
                    <span className={style.productName}>[Product Name]</span>
                    <span className={style.price}>₱100.00</span>
                    <div>
                        <button className={style.sizeButton} onClick={this.sizeButtonHandler}>320G</button>
                        <button className={style.sizeButton} onClick={this.sizeButtonHandler}>500G</button>
                        <button className={style.sizeButton} onClick={this.sizeButtonHandler}>1000G</button>
                        <button className={style.sizeButton} onClick={this.sizeButtonHandler}>1500G</button>
                    </div>
                </div>
                <div className={style.itemButtons}>
                    <button className={style.quantityButton}><img src={minus} className={style.quantityButtonImage} onClick={this.minusHandler}/></button>
                    <input type="number" className={style.inputNumber} value={this.state.value} onChange={this.changeValue} ref={this.inputNumber}/>
                    <button className={style.quantityButton}><img src={plus} className={style.quantityButtonImage} onClick={this.plusHandler}/></button>
                </div>
            </div>
        )
    }
}

export default Item
