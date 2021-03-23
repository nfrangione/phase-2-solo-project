import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        { props.sushi.map(s => <Sushi key={s.id} eat={props.eat} sushi={s} />) }
        <MoreButton click={props.click}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer