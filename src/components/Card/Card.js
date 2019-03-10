import React, { Component } from 'react';
import Button from '../Button/Button';
import './Card.css';
import 'intersection-observer';
import { lazyLoad } from '../../util/LazyLoad';

class Card extends Component {

  renderCard() {
    if(this.props.blog) {
      return(
        <div className="card__blog">
          <img data-src={this.props.imgUrl} alt={this.props.title} className="card__blog__image" />
          <div className="card__blog__date">
            {this.props.date}
          </div>
          <div className="card__blog__title">
            {this.props.title}
          </div>
          <div className="card__blog__content">
            {this.props.children}
            <p><a href={this.props.link} className="card__blog__content__link">Read More . . . </a></p>
          </div>
        </div>
      );
    } else {
      return(
        <div className="card">
          <div className="card__image__container">
            <div className="card__image" data-src={this.props.imgUrl}>
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

  componentDidMount() {
    const imgTargets = document.querySelectorAll('.card__blog__image');
    const divTargets = document.querySelectorAll('.card__image');
    
    imgTargets.forEach((elm) => {
      lazyLoad(elm, 'img');
    });
    divTargets.forEach((elm) => {
      lazyLoad(elm, 'div');
    });
  }

  render() {
    return this.renderCard();
  }
}

export default Card;
