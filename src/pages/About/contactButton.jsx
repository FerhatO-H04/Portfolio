import  "./contactButton.css"
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function ContactButton () {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate.push('/contact');
    };

    return (
        
        <button className="contactButton" onClick={handleClick}>CONTACT</button>
    );
};

export default ContactButton;