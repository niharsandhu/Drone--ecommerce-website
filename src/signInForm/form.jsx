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
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa('root:apiAccess'),
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            setResponseMessage(result.message || 'Success');
        } catch (error) {
            setResponseMessage('An error occurred');
        }
    };

    return (
        <Components.Container>
            <Components.SignUpContainer $signinIn={signIn}>
                <Components.Form onSubmit={(e) => handleSubmit(e, 'https://api.hobbyhai.com/api/auth/register')}>
                    <Components.Title>Create Account</Components.Title>
                    {responseMessage && <p style={{ color: 'red' }}>{responseMessage}</p>}
                    <Components.Input type='text' id="register-name" name="name" placeholder='Name' />
                    <Components.Input type='email' id="register-email" name="email" placeholder='Email' />
                    <Components.Input type='password' id="register-password" name="password" placeholder='Password' />
                    <Components.Input type="tel" id="register-countryCode" name="countryCode" placeholder='+91' />
                    <Components.Input type="tel" id="register-phone_number" name="phone_number" placeholder='Phone Number' />
                    <Components.Button type='submit'>Submit</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer $signinIn={signIn}>
                <Components.Form onSubmit={(e) => handleSubmit(e, 'https://api.hobbyhai.com/api/auth/login')}>
                    <Components.Title>Sign in</Components.Title>
                    {responseMessage && <p style={{ color: 'red' }}>{responseMessage}</p>}
                    <Components.Input type='email' id='login-email' name="email" placeholder='Email' />
                    <Components.Input type='password' id='login-password' name="password" placeholder='Password' />
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

            {responseMessage && <p style={{ color: 'red' }}>{responseMessage}</p>}
        </Components.Container>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Sign />
    </React.StrictMode>
);


