import React, { Fragment } from 'react'
import Intro from '../Intro/Intro'
import Cards from '../Cards/Cards'
import Blog from '../Blog/Blog'
import FAQ from '../FAQ/FAQ'
import './Content.scss'

const Content = props => (
  <Fragment>
    <Intro />
    <Cards />
    <Blog />
    <FAQ />
  </Fragment>
)

export default Content
