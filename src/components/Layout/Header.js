import React from 'react';
import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import  HeaderCartButton from '../UI/Button';
const Header = props => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="A table full of delicious meals"/>
            </div>
        </React.Fragment>
    );
};
export default Header;