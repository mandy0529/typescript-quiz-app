import React, {useState} from 'react';
import {Wrapper} from './styles/App.styles';
import {shuffleArray} from './utils/utils';
import {CardType, createBoard} from './utils/img';

function App() {
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchdPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(
    undefined
  );

  return (
    <Wrapper className="App">
      {cards.map((item, index) => {
        return <p key={index}>{item.id}</p>;
      })}
    </Wrapper>
  );
}

export default App;
