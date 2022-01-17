import React, {useState} from 'react';
import {Wrapper} from './styles/App.styles';
import {shuffleArray} from './utils/utils';
import {CardType, createBoard} from './utils/img';
import Card from './components/Card';

function App() {
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchdPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(
    undefined
  );

  const handleClick = (currentClickedCard: CardType) => {
    const firstClickedCard = cards.map((item) =>
      item.id === currentClickedCard.id
        ? {...item, flipped: true, clickable: false}
        : item
    );
    setCards(firstClickedCard);

    // to find pair card first challenge
    if (!clickedCard) {
      setClickedCard(currentClickedCard);
      return;
    }

    // 한장 이미 선택했고, 두장째 뒤집으러갈때 정답인걸 찾았을때
    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchdPairs((prev) => prev + 1);
      const secondClickedCard = cards.map((item) =>
        item.id === currentClickedCard.id || item.id === clickedCard.id
          ? {...item, flipped: true, clickable: false}
          : item
      );
      setCards(secondClickedCard);
      setClickedCard(undefined);
      return;
    }

    // 정답 아닐때, 1초 기다리고, 다시 카드 뒤집기
    setTimeout(() => {
      const newList = cards.map((item) =>
        item.id === clickedCard.id || item.id === currentClickedCard.id
          ? {...item, flipped: false, clickable: true}
          : item
      );
      setCards(newList);
    }, 500);
    setClickedCard(undefined);
  };

  const startGame = () => {
    setGameWon(false);
    setMatchdPairs(0);
    setCards(shuffleArray(createBoard()));
    setClickedCard(undefined);
  };

  React.useEffect(() => {
    if (cards.length / 2 === matchedPairs) {
      console.log('you won!!!');
      setGameWon(true);
    }
  }, [matchedPairs]);

  React.useEffect(() => {
    startGame();
  }, [gameWon]);

  return (
    <Wrapper className="App">
      {cards.map((item) => {
        return <Card key={item.id} callback={handleClick} card={item} />;
      })}
    </Wrapper>
  );
}

export default App;
