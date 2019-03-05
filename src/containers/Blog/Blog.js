import React, { Component } from 'react';
import './Blog.css';
import Title from '../../components/Title/Title';
import Card from '../../components/Card/Card';

class Blog extends Component {
  render() {
    return (
        <section className="blog">
            <Title>
                Latest News
            </Title>
            <div className="blog__container">
                <Card
                    blog
                    imgUrl = {'http://joeyui.byethost7.com/creative-wonder/assets/images/blog__card__image--one.jpg'}
                    title = {'The Power Of Play In The Early Learning Environment'}
                    date = {'Mar 1st 2019'}
                    link = {'#'}>
                    "How will my child be prepared for school if all he does is play?" This is a
                    fair and common question that is often asked and it's a question that can
                    often be difficult for preschool teachers to answer. To sum up the value of
                    play in the learning process in one short answer is not so easy to do
                </Card>
                <Card
                    blog
                    imgUrl = {'http://joeyui.byethost7.com/creative-wonder/assets/images/blog__card__image--two.jpg'}
                    title = {'Teaching Children To Ask For Help'}
                    date = {'Mar 6th 2019'}
                    link = {'#'}>
                    In our preschools and at home, we should make "come to me for help" one of the
                    first strategies that we teach children. Too often, I hear teachers and parents
                    tell their children to go and figure it out without saying, "And I am here to
                    help."
                </Card>
            </div>
        </section>
    );
  }
}

export default Blog;
