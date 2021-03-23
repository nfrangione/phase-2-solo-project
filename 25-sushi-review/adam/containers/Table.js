import React, { Fragment } from 'react'
//props.moreCash
const AddFunds = props => {
  return (
    <div className="new">
      <form onSubmit={props.moreCash}>
        <input type="number" name="cash"></input>
        <button>MONEY</button>
      </form>
    </div>
  )
}

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.money } remaining!
      </h1>
      <AddFunds moreCash={props.moreCash}/>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.eaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table