import React, { Fragment } from "react";

// const Sushi = ({ sush: { name, price, img_url } }) => {
const Sushi = (props) => {
  const {
    sush: { id, name, price, img_url, isEaten },
    eatSushi,
  } = props;

  return (
    <div className="sushi">
      <div className="plate" onClick={() => eatSushi(id, price)}>
        {
          /* Tell me if this sushi has been eaten! */
          isEaten ? null : <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;
