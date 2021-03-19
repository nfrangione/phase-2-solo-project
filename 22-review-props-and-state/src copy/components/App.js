import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onFindPetsClick = () => {
    let url = ``
    this.state.filters.type == 'all'? url = `/api/pets` : url = `/api/pets?type=${this.state.filters.type}`
    fetch(url)
    .then(res => res.json())
    .then(jsonPets => this.setState({pets: jsonPets}))
  }

  onChangeType = (e) => {
    this.setState({filters: { ...this.state.filters, type: e.target.value}})
  
  }

  onAdoptPet = (id) => {
    let updatedPets = this.state.pets.map(pet => {
      return pet.id == id ? {...pet, isAdopted:true} : pet
    })
    this.setState({pets:updatedPets})
  }

  test = () => console.log('hi')

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
