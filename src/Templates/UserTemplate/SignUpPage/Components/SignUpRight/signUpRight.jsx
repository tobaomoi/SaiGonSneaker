import React from 'react';
import './signUpRight.scss';

function SignUpRight(props) {
    return (
        <div className="right">
            <form >
                <h2 className="text-center">Sign Up</h2>
                <div className="input-container name">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" />
                </div>
                <div className="input-container email">
                    <label htmlFor="ename">Email</label>
                    <input id="email" name="email" type="email" />
                </div>
                <div className="input-container password">
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" placeholder="Must be at least 6 characters" type="password" />
                    <i className="far fa-eye-slash"></i>
                </div>
                <div className="input-container confirmPassword">
                    <label htmlFor="password">Confirm password</label>
                    <input id="confirmPassword" name="confirmPassword" placeholder="Must be at least 6 characters" type="password" />
                    <i className="far fa-eye-slash"></i>
                </div>
                <div className="input-container cta">
                    <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                    <p id="policy">Đồng ý với <a href=""><strong> điều khoản</strong> </a> </p>

                </div>
                <button className="singup-btn" type="submit">
                    Sign up
                </button>
                <section className="copy">
                    <div className="login-container">
                        <p>Alredy have an account? <a href="#"><strong>Log In </strong></a> </p>
                    </div>
                </section>
            </form>
        </div>
    );
}

export default SignUpRight;