import React from 'react';

class SearchBar extends React.Component{
    state ={
        term :''
    }

    formSubmit = (event) =>{
        event.preventDefault();
        //console.log('i am inside'+this.state.term);
        this.props.onSubmit(this.state.term);
    }
    //AIzaSyACetkQ6ZcVGXbjbY35DKZJ1J0BoGhHbHk

    render(){
        return(
            <div className="ui segment">
            <form onSubmit = {this.formSubmit} className="ui form">
                <div className="field">
                    <label>Video Sreach</label>
                    <input type="text" name="first-name"  onChange = {e => this.setState({term : e.target.value})} placeholder="First Name" />
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;