import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../wellcome-screen/wellcome-screen';


function App(props) {
  const {cardsCount} = props;

  return (
    <WelcomeScreen cardsCount={cardsCount}/>
  );
}

App.propTypes = {
  cardsCount: PropTypes.number,
};

export default App;
