import { useState } from 'react';
import styles from './Contactform.module.css';

const Contactform = () => {

    let[name, setName] = useState('');
    let[email, setEmail] = useState('');
    let[text, setText] = useState('');
    let[flag, setFlag] = useState(false);
   
    const handleSubmit = (event) => {
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
        if(name != '' ){
            setFlag(true);
            console.log(name);
           } else {
            setFlag(false);
           }
        
       
       


    }
  return (
    <div className={styles.contactSection}>
        <div className={styles.heroFormControl}>
            <form onSubmit={handleSubmit}>
                <div className={styles.formControl}>
                    <label htmlFor="name">Name</label>
                    <input className={styles.formInput} type="text" name="name"/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="email">Email</label>
                    <input className={styles.formInput} type="text" name="email"/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="text">Text</label>
                    <textarea className={styles.formInput} name="message" rows="8"/>
                </div>
                
                <div className={styles.formControl}>
                    <input className={styles.formSubmit} type="submit" value="Submit" />
                </div>
            </form>
            <div className={flag ? styles.show : styles.hide}>
                <ul>
                    <li>Name: {name}</li>
                    <li>Email: {email}</li>
                    <li>Text: {text}</li>
                </ul>
            </div>
        </div>
    
    </div>
  )
}

export default Contactform