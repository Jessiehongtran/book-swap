import React from 'react';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){

        return (
            <div>
                <label>
                    Your email
                    <input type="email" placeholder="example@gmail.com"/>
                </label>
                <label>
                    Your phone number
                    <input type="tel" placeholder="(510) 123 4567"/>
                </label>
                <label>
                    Password
                    <input type="password"/>
                </label>
                <button>Sign In</button>
            </div>
        )
    }
}

export default SignIn;