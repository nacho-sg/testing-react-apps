import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/core';
import './LandingPage.scss';

const blockName = 'landing-page';

const LandingPage = props => {
  return (
    <Fragment>
      <div className={`${blockName}__logo`}>
        <div className={`${blockName}__brick-wall`} />
        <img src="images/oven.svg" alt="oven" />
      </div>
      <div className={`${blockName}__start`}>
        <p>Welcome to Fake Pizza, where we take your money and give you hapiness :D!</p>
        <p>What do you want to do?</p>
        <div>
          <Link to="choose"><Button>Check our menu</Button></Link>
          <Button>Call to order</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
