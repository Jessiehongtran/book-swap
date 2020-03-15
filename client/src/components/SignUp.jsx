import React from 'react';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){

        return (
            <div>
                <form>
                    <label>
                        Your email
                        <input type="email" placeholder="example@gmail.com"/>
                    </label>
                    <label>
                        Your phone number
                        <input type="tel" placeholder="(510) 123 4567"/>
                    </label>
                    <label>
                        Your zipcode
                        <input type=""/>
                    </label>
                    <label>
                        Password
                        <input type="password"/>
                    </label>
                    
                    <button onClick={() => this.props.history.push('/xxx')}>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp;