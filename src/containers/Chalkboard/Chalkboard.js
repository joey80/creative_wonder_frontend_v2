import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../../components/Global/Global.css';
import './Chalkboard.css';
import { lazyLoad } from '../../util/LazyLoad';

class Chalkboard extends Component {

  componentDidMount() {
    const divTargets = document.querySelectorAll('.chalkboard');

    divTargets.forEach((elm) => {
      lazyLoad(elm, 'div');
      lazyLoad(elm, 'border');
    });
  }

  render() {
    return (
      <section
        className="chalkboard"
        data-src="https://res.cloudinary.com/hwzdnifrp/image/upload/v1552263074/chalkboard__bg.jpg"
        border-src="https://res.cloudinary.com/hwzdnifrp/image/upload/v1552267905/chalkboard__wood.jpg">
        <div className="chalkboard__container">
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Chalkboard;
