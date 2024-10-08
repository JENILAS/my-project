import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";
export default function StarRating() {
  let stars = [1, 2, 3, 4, 5];
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  const handleOnClick = (star) => {
    setRating(star);
  };
  const handleMouseMove = (star) => {
    setHover(star);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="container">
      <h1 className="header">2. STAR RATING</h1>
      <h3>
        This is basic star rating model using react. I have used FaStar icon and
        handled the mouse events to denote star selection.
      </h3>
      {stars.map((star) => (
        <FaStar
          key={star}
          className={star <= (hover || rating) ? "active" : "inactive"}
          onClick={() => handleOnClick(star)}
          onMouseMove={() => handleMouseMove(star)}
          onMouseLeave={() => handleMouseLeave()}
          size={40}
        />
      ))}
    </div>
  );
}
