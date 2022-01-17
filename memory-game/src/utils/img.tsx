import cardback from '../img/card-back.jpeg';
import lego1 from '../img/lego1.jpeg';
import lego2 from '../img/lego2.jpeg';
import lego3 from '../img/lego3.jpeg';
import lego4 from '../img/lego4.jpeg';
import lego5 from '../img/lego5.jpeg';
import lego6 from '../img/lego6.jpeg';
import lego7 from '../img/lego7.jpeg';
import lego8 from '../img/lego8.jpeg';

export type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};

const cards: string[] = [
  lego1,
  lego2,
  lego3,
  lego4,
  lego5,
  lego6,
  lego7,
  lego8,
];

export const createBoard = (): CardType[] =>
  [...cards, ...cards].map((item, index) => ({
    id: `item${index}`,
    flipped: false,
    backImage: cardback,
    frontImage: item,
    clickable: true,
    matchingCardId:
      index < cards.length
        ? `item${index + cards.length}`
        : `item${index - cards.length}`,
  }));
