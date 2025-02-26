// src/Query.jsx
import React, { useState } from 'react';

function Query() {
    const [emailStatus, setEmailStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost/projecthey/backendphp/send_email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}),
            });

            if (response.ok) {
                const data = await response.text();
                setEmailStatus(data);
            } else {
                console.error('Email sending failed:', response.status, response.statusText);
                setEmailStatus('Error sending email.');
            }
        } catch (error) {
            console.error('Network error:', error);
            setEmailStatus('Network error.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit">Send Test Email</button>
            </form>
            {emailStatus && <p>{emailStatus}</p>}
        </div>
    );
}

export default Query;