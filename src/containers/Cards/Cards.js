import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../../components/Global/Global.css';
import Title from '../../components/Title/Title';
import Card from '../../components/Card/Card';
import Chalkboard from '../Chalkboard/Chalkboard';

class Cards extends Component {


    render() {
        return (
          <Chalkboard>
            <Title isLight>Communication Board</Title>
            <div className="chalkboard__card__container">
                <Card
                    imgUrl = {"https://res.cloudinary.com/hwzdnifrp/image/upload/v1552178360/card__image__bg--one.jpg"}
                    title = {"Back To School Night!"}
                    link = {"#"}>
                    Back to School Night is a time for parents and teachers to share information as a classroom
                    and as a school community. You'll have time to meet and greet other parents, hear about long
                    term plans for the Pre-School, and learn more about a typical day in the classroom for your children.
                </Card>
                <Card
                    imgUrl = {"https://res.cloudinary.com/hwzdnifrp/image/upload/v1552178360/card__image__bg--two.jpg"}
                    title = {"Earth Day Project"}
                    link = {"#"}>
                    Earth Day is an important day set aside to inspire appreciation for and awareness of the earth's
                    environment. It is celebrated by people in different countries - all over the world, all sharing
                    an appreciation of the planet and a dedication to protecting its natural resources.
                </Card>
                <Card
                    imgUrl = {"https://res.cloudinary.com/hwzdnifrp/image/upload/v1552178360/card__image__bg--three.jpg"}
                    title = {"Learning About Space!"}
                    link = {"#"}>
                    The students were asked by their teacher what they wanted to learn about next and the children chose
                    space! To kick off their learning, the students were taught about the different planets in our solar
                    system and what astronauts do. Afterwards, the students used food coloring to color their planets.
                </Card>
            </div>
          </Chalkboard>
        );
    }
}

export default Cards;