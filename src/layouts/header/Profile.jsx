import React from 'react'

const Profile = () => {
    return (
        <div className="profile">
            <h4>LOGIN NOW</h4>
            <form action="">
                <input type="email" name="email" id="user-email" placeholder="enter your email" />
                <input type="password" name="password" id="user-password" placeholder="enter your password" />
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember Me</label>
                <button type="submit" className="main-btn">Login Now</button>
            </form>
            <p>Forget Password? <a href="">Click Here</a></p>
            <p>Don't Have An Account? <a href="">Create One</a></p>
        </div>
    )
}

export default Profile