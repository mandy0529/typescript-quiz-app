import React from 'react';
import {Wrapper} from './styles/Card.styles';

type ICard = {
  logo: string;
  video: string;
};
const Card: React.FC<ICard> = ({logo, video}) => {
  const handleMouseOver = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.play();
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
  };

  return (
    <Wrapper>
      <div className="border" />
      <img src={logo} alt={logo} />

      <video
        src={video}
        loop
        muted
        preload="none"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
    </Wrapper>
  );
};

export default Card;
