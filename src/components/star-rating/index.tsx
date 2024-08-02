import { FaRegStar, FaStar } from 'react-icons/fa6';
import { StarRatingContainer } from './styles';

type StarRatingType = {
  rating: number;
};

export function StarRating({ rating }: StarRatingType) {
  const numStars = Math.round(rating / 2);

  const fullStars = [];
  const emptyStars = [];

  for (let i = 0; i < 5; i++) {
    if (i <= numStars) {
      fullStars.push(i);
    } else {
      emptyStars.push(i);
    }
  }

  return (
    <StarRatingContainer>
      {fullStars.map((index) => (
        <FaStar key={index} />
      ))}
      {emptyStars.map((index) => (
        <FaRegStar key={index} />
      ))}
    </StarRatingContainer>
  );
}
