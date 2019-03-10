import React, { Component } from 'react';
import Button from '../Button/Button';
import './Card.css';

class Card extends Component {

  lazyLoad(target) {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');

          img.setAttribute('src', src);
          observer.disconnect();
        }
      })
    });

    io.observe(target);
  };

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

  componentDidMount() {
    const targets = document.querySelectorAll('.card__blog__image');
    targets.forEach(this.lazyLoad);
  }

  render() {
    return this.renderCard();
  }
}

export default Card;
