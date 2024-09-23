import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './form.css';
import * as Components from './compo';

function Sign() {
    const [signIn, toggle] = useState(true);
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (event, url) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            console.log('Sending data:', data); // Log data being sent
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa('root:apiAccess'),
                },
                body: JSON.stringify(data),
            });

            console.log('Response status:', response.status); // Log status
            console.log('Response headers:', response.headers); // Log headers

            // Check if the response is a valid JSON
            if (response.ok) {
                const result = await response.json();
                console.log('Response JSON:', result); // Log response JSON
                setResponseMessage(result.message || 'Success');
            } else {
                const errorText = await response.text(); // Get the text error message if JSON fails
                console.log('Error text:', errorText); // Log the error text
                setResponseMessage('Error: ' + errorText);
            }
        } catch (error) {
            console.error('Catch error:', error); // Log the error message
            setResponseMessage('An unexpected error occurred.');
        }
    };

    return (
        <Components.Container>
            <Components.SignUpContainer $signinIn={signIn}>
                <Components.Form onSubmit={(e) => handleSubmit(e, 'https://api.hobbyhai.com/api/auth/register')}>
                    <Components.Title>Create Account</Components.Title>
                    {responseMessage && <p style={{ color: 'red' }}>{responseMessage}</p>}
                    <Components.Input type='text' id="name" name="name" placeholder='Name' />
                    <Components.Input type='email' id="email" name="email" placeholder='Email' />
                    <Components.Input type='password' id="password" name="password" placeholder='Password' />
                    <Components.Input type="tel" id="countryCode" name="countryCode" placeholder='+91' />
                    <Components.Input type="tel" id="phone_number" name="phone_number" placeholder='Phone Number' />
                    <Components.Button type='submit'>Submit</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer $signinIn={signIn}>
                <Components.Form onSubmit={(e) => handleSubmit(e, 'https://api.hobbyhai.com/api/auth/login')}>
                    <Components.Title>Sign in</Components.Title>
                    {responseMessage && <p style={{ color: 'red' }}>{responseMessage}</p>}
                    <Components.Input type='email' id='email' name="email" placeholder='Email' />
                    <Components.Input type='password' id='password' name="password" placeholder='Password' />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.Button type='submit'>Sign In</Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer $signinIn={signIn}>
                <Components.Overlay $signinIn={signIn}>
                    <Components.LeftOverlayPanel $signinIn={signIn}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                            To keep connected with us please login with your personal info
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel $signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter your personal details and start your journey with us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Sign />
    </React.StrictMode>
);


