import React from 'react';
import {Wrapper, FrontImg, BackImg} from '../styles/Card.styles';
import {CardType} from '../utils/img';

type ICard = {
  card: CardType;
  callback: (card: CardType) => void;
};

const Card: React.FC<ICard> = ({card, callback}) => {
  const handleClick = () => {
    if (card.clickable) callback(card);
  };

  return (
    <Wrapper onClick={handleClick}>
      <FrontImg flipped={card.flipped} src={card.frontImage} />
      <BackImg flipped={card.flipped} src={card.backImage} />
    </Wrapper>
  );
};

export default Card;
