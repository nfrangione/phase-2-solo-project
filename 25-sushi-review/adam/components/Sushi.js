import React, { Fragment } from 'react'

const Sushi = ({ sushi:{name, img_url, price, eaten}, eat, sushi }) => {
  
  
  return (
    <Fragment>
      
        <div className="sushi">
          <div className="plate" 
              onClick={() => eat(sushi)}>
            { 
              /* Tell me if this sushi has been eaten! */ 
              eaten ?
                null
              :
                <img src={img_url} width="100%" alt="yummysushi"/>
            }
          </div>
          <h4 className="sushi-details">
            {name} - ${price}
          </h4>
        </div>
      
    </Fragment>
  )
}

export default Sushi