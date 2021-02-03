import React, { Component } from 'react'
import styles from './sidebar.module.css'


let cookingIngredients= [
    'BAKING INGREDIENTS',
    'CANNED FOODS',
    'CONDIMENTS',
    'PASTA & GRAINS',
    'SAUCES',
    'SPICES & HERBS',
 ]

let bakingIngredients= [
    'BAKING POWDER',
    'BAKING SODA',
    'BAKING SYRUP',
    'CAKE INGREDIENTS',
    'CORNSTARCH',
    'DESSICATED COCONUT',
    'FLOUR',
    'FOOD COLORING',
    'FOOD WRAPPER',
    'LARD',
    'MARGARINE',
    'PANCAKE',
    'SUGAR',
    'YEAST',
]

let cannedFoods = [
    'CANNED DISH',
    'CARNE NORTE',
    'CORNED BEEF',
    'CORNED CHICKEN',
    'HAM',
    'LIVER SPREAD',
    'LUNCHEON MEAT',
    'MEAT LOAF',
    'PORK & BEANS',
    'SARDINES',
    'SAUSAGE',
    'SQUID',
    'TUNA',
]

let condiments= [
    'BAGOONG',
    'BEANS',
    'CORN',
    'MUSHROOMS',
    'PEARLS',
    'PEAS',
    'PICKLES',
]

let pastaAndGrains= [
    'CEREALS',
    'MACARONI',
    'NOODLES',
    'OATS',
    'PANCIT',
    'RICE',
    'SEEDS',
    'SOUP',
    'SPAGHETTI',
]

let sauces= [
    'BARBECUE SAUCE',
    'CATSUP',
    'EXTRACTS',
    'HOT SAUCE',
    'LECHON SAUCE',
    'MILK (COOKING)',
    'OIL',
    'OYSTER SAUCE',
    'PATIS',
    'RECIPE SAUCE',
    'SOY SAUCE',
    'SPAGHETTI SAUCE',
    'SWEET & SOUR SAUCE',
    'TOMATO PASTE',
    'TOMATO SAUCE',
    'VINEGAR',
]

let spicesAndHerbs=[
    'DRIED PRODUCE',
    'FLAVOR MIXES',
    'MSG (VETSIN)',
    'PEPPER',
    'SALT',
    'SEASONINGS',
    'SPREADS',
    'BUTTER',
    'CHEESE',
    'FRUIT PRESERVE',
    'JAM',
    'MARGARINE',
    'MAYONNAISE',
    'PEANUT BUTTER',
    'SANDWICH SPREAD',
]

let cookingIngredientsPtr = [bakingIngredients, cannedFoods, condiments, pastaAndGrains, sauces, spicesAndHerbs]

class CookingIngredients extends Component {
    constructor(props) {
        super(props)
    }

    clickHandlerCaller = (e) => {
        this.props.clickHandler(e)
        console.log("clicked")
    }
    
    render() {
        let innerItems = ''

        return (
            <>
                {cookingIngredients.map((element) => {
                    if(element === 'BAKING INGREDIENTS'){
                        innerItems = bakingIngredients.map((element) => {
                            return <React.Fragment key={element}><li><span className={styles.span}>{element}</span></li></React.Fragment>
                        })                        
                    }

                    else if(element === 'CANNED FOODS'){
                        innerItems = cannedFoods.map((element) => {
                            return <React.Fragment key={element}><li><span className={styles.span}>{element}</span></li></React.Fragment>
                        })                        
                    }

                    else if(element === 'CONDIMENTS'){
                        innerItems = condiments.map((element) => {
                            return <React.Fragment key={element}><li><span className={styles.span}>{element}</span></li></React.Fragment>
                        })                        
                    }
                    
                    else if(element === 'PASTA & GRAINS'){
                        innerItems = pastaAndGrains.map((element) => {
                            return <React.Fragment key={element}><li><span className={styles.span}>{element}</span></li></React.Fragment>
                        })                        
                    }

                    else if(element === 'SAUCES'){
                        innerItems = sauces.map((element) => {
                            return <React.Fragment key={element}><li><span className={styles.span}>{element}</span></li></React.Fragment>
                        })                        
                    }

                    else if(element === 'SPICES & HERBS'){
                        innerItems = spicesAndHerbs.map((element) => {
                            return <React.Fragment key={element}><li><span className={styles.span}>{element}</span></li></React.Fragment>
                        })                        
                    }

                    return (
                    <React.Fragment key={element}>
                        <li>
                            <span className={styles.span} onClick={this.clickHandlerCaller}>{element}</span>
                            <ul className={`${styles.ul} none`}>
                                {innerItems}
                            </ul>
                        </li>
                    </React.Fragment>)
                })}

                {/* <li><span className={styles.span}>BAKING </span>
                </li> */}
            </>
        )
    }
}

export default CookingIngredients
