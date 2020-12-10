import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';



function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {

        let isValid = true;

        if (e.target.name === 'email') {
            isValid = validateEmail(e.target.value);
            console.log(isValid);
        }

        // isValid conditional statement
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {

            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        console.log('errorMessage', errorMessage);

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    console.log(formState);


    // JSX

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" onBlur={handleChange} defaultValue={name} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" onBlur={handleChange} defaultValue={email} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" onBlur={handleChange} defaultValue={message} rows="5" />

                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;