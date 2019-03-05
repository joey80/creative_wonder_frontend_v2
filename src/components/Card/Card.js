import React, { Component } from 'react';
import Button from '../Button/Button';
import './Card.css';

class Card extends Component {

  renderCard() {
    if(this.props.blog) {
      return(
        <div className="card__blog">
          <img src={this.props.imgUrl} alt={this.props.title} className="card__blog__image" />
          <div className="card__blog__date">
            {this.props.date}
          </div>
          <div className="card__blog__title">
            {this.props.title}
          </div>
          <div className="card__blog__content">
            {this.props.children}
            <p><a href={this.props.link}>Read More . . . </a></p>
          </div>
        </div>
      );
    } else {
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
  }

  render() {
    return this.renderCard();
  }
}

export default Card;
