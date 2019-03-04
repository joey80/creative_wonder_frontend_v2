import React, { Component } from 'react';
import Button from '../Button/Button';
import './Card.css';

class Card extends Component {

  renderCard() {
    return(
      <div className="card">
        <div className="card__image__container">
          <div className="card__image" style={{  backgroundImage: "url(" + this.props.imgUrl + ")" }}>
            <div className="card__overlay">
              <Button isSmall>Read More</Button>
            </div>
          </div>
        </div>
        <div className="card__title">
          {this.props.title}
        </div>
        <hr />
        <div className="card__content">
          <p>{this.props.children}</p>
          <p><a href={this.props.link}>Read More . . . </a></p>
        </div>
      </div>
    );
  }

  render() {
    return this.renderCard();
  }
}

export default Card;
