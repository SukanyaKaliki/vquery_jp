import React, { Component } from 'react';

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
        value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Feedback was submitted: ' + this.state.value);
        //event.preventDefault();
    }
  
   render() {
      return (
         <div>
             <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className={'labelDiv'}>
                    <label>
                        Feedback:
                        <textarea value={this.state.value} placehlder="Please give your valuable feedback here." className={'textarea'} onChange={this.handleChange} />
                    </label>
                </div>
                <input type="submit" className={'submitBtn'} value="Submit >" />
            </form>
         </div>
      );
   }
}
export default Feedback;