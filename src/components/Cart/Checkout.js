import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = props => {
    const [formValid, setFormValid] = useState({
        name: true,
        city: true,
        postal: true,
        street: true,
    });

    const nameInputRef = useRef();
    const postalInputRef = useRef();
    const streetInputRef = useRef();
    const cityInputRef = useRef();
    const cancelClickHandler = () => {
        props.onCancel();
    }
    const checkoutSubmitHandler = event => {
        event.preventDefault();
        const name = nameInputRef.current.value;
        const street = streetInputRef.current.value;
        const postal = postalInputRef.current.value;
        const city = cityInputRef.current.value;

        const validName = !isEmpty(name);
        const validStreet = !isEmpty(street);
        const validCity = !isEmpty(city);
        const validPostal = isFiveChars(postal);
        setFormValid({
            name: validName,
            city: validCity,
            street: validStreet,
            postal: validPostal,
        })
        const validForm = 
        validName &&
        validStreet &&
        validPostal &&
        validCity
        if(!validForm){
            return;
        }
        const userData = {
            name: name,
            street: street,
            postal: postal,
            city: city
        }
        props.onConfirm(userData);
    }
    return (
        <form className={classes.form} onSubmit={checkoutSubmitHandler}>
            <div className={`${classes.control} 
            ${!formValid.name && classes.invalid}
            `}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef}/>
                {!formValid.name && <p>please input a valid name</p>}
            </div>
            <div className={`${classes.control} 
            ${!formValid.street && classes.invalid}
            `}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef}/>
                {!formValid.street && <p>please input a valid street</p>}
            </div>
            <div className={`${classes.control} 
            ${!formValid.postal && classes.invalid}
            `}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalInputRef}/>
                {!formValid.postal && <p>please input a valid postal code (length = 5)</p>}
            </div>
            <div className={`${classes.control} 
            ${!formValid.city && classes.invalid}
            `}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef}/>
                {!formValid.city && <p>please input a valid city</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={cancelClickHandler}>Cancel</button>
                <button type='submit' className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
}
export default Checkout;