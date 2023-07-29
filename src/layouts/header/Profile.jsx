import React from 'react'
import { Link } from 'react-router-dom'

const Profile = ({active}) => {
    return (
        <div className={active? "profile active" : "profile"}>
            <h4>LOGIN NOW</h4>
            <form action="">
                <input type="email" name="email" id="user-email" placeholder="enter your email" />
                <input type="password" name="password" id="user-password" placeholder="enter your password" />
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember Me</label>
                <button type="submit" className="main-btn">Login Now</button>
            </form>
            <p>Forget Password? <Link to={"/"}>Click Here</Link></p>
            <p>Don't Have An Account? <Link to={"/"}>Create One</Link></p>
        </div>
    )
}

export default Profile