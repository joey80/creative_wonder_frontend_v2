import React, { Component } from 'react';
//import './Card.css';

class FAQItem extends Component {

  render() {
    return (
        <div className="FAQItem__container">
            <span className="FAQItem__question">{this.props.question}</span>
            <div className="FAQItem__answer">{this.props.answer}</div>
        </div>
    );
  }
}

export default FAQItem;
