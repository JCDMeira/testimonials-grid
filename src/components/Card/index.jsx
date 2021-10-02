import React from 'react';
import P from 'prop-types';
import * as CardComponents from './style.js';
import quotaImg from '../../assets/images/bg-pattern-quotation.svg';

function Card({
  background,
  height,
  first,
  photo,
  name,
  verified,
  tittle,
  children,
}) {
  return (
    <CardComponents.Fieldcard
      background={background}
      height={height}
      color={name[1]}
      colorTittle={tittle[1]}
    >
      {first ? <CardComponents.quota src={quotaImg} alt="" /> : ''}
      <div>
        <div>
          <img src={photo} alt="photo" />
        </div>
        <h2>
          {name[0]}
          <span>
            {verified ? 'Verified Graduate' : 'Not Verified Graduate'}
          </span>
        </h2>
      </div>
      <h1>{tittle[0]}</h1>
      <p>{`" ${children} "`}</p>
    </CardComponents.Fieldcard>
  );
}

export { Card };

Card.defaultProps = {
  first: false,
};

Card.propTypes = {
  background: P.string.isRequired,
  height: P.string.isRequired,
  first: P.bool,
  photo: P.string.isRequired,
  name: P.array.isRequired,
  verified: P.bool.isRequired,
  tittle: P.array.isRequired,
  children: P.string.isRequired,
};
