import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './fadeInStyles.css';

const FadeIn = ({ children }) => (
  <CSSTransitionGroup
    transitionName="special"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={300}
  >
    {children}
  </CSSTransitionGroup>
);

export default FadeIn;
