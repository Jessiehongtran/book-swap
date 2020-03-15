import React from 'react';

class BookHolders extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        // Get list of people holding this book based on bookId from localStorage
    }

    render(){

        return (
            <div>
                <div className="filter">
                    <p>Custom filter</p>
                    <input placeholder="Your zipcode"/>
                    <input placeholder="Your book offer"/>
                </div>
                <div className="holders">
                    <img src="" alt="profile-picture"/>
                    <p>Holder name</p>
                    <p>Holder address</p>
                    <p>Holder book inquires: </p>
                </div>
            </div>
        )
    }
}

export default BookHolders