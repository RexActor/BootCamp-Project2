import React, { useState } from 'react';

function ContactForm({ closeModal }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
                {/* Contact form */}
                <h2>Contact Form</h2>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
}

export default ContactForm;