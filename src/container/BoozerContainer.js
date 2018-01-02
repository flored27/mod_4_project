import React from 'react';
import ListContainer from './ListContainer'
import DetailContainer from './DetailContainer'
import FormContainer from './FormContainer'
import '../css/Boozer.css';

class BoozerContainer extends React.Component {

  state = {
    cocktails: [],
    selected: "",
    ingredients: "",
    proportions: [],
    ingredient_array: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cocktails/')
    .then(data => data.json())
    .then(data => this.setState({ cocktails: data.cocktail }));

    fetch('http://localhost:3000/api/v1/cocktails/')
    .then(data => data.json())
    .then(data => this.setState({ ingredient_array: data.ingredient }));
  }


  // name: cocktail.name,
  // description: cocktail.description,
  // instructions: cocktail.instructions,
  // proportions: [{
  //   ingredient_name: cocktail.proportions.ingredient_name,
  //   amount: cocktail.proportions.amount
renderNewList=(cocktail)=>{
  console.log("Hello")
    fetch('http://localhost:3000/api/v1/cocktails/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cocktail)
    })
    .then(data=>data.json())
    .then(data=>{
      this.setState((prevState) => {
        return {cocktails: [...prevState.cocktails, data.cocktail[`${data.cocktail.length-1}`]]};
      });
      console.log(this.state.cocktails)
    })

  }

  newIngredients=()=>{

    console.log(this.state)
    fetch(`http://localhost:3000/api/v1/cocktails/342`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 342,
        name: "James",
        description: "Delicious",
        instructions: "just drink",
        proportions: [{
         ingredient_name: "orange",
         amount: "2 of them"
       }]
      })
    })
  }

  handleSelected =(c) => {

    this.setState({
      selected: c,
    })

    fetch(`http://localhost:3000/api/v1/cocktails/${c.id}`)
    .then(data => data.json())
    .then(ingredients => this.setState({ ingredients }));


  }

  addIngredientForm = (event) => {
    return (
      <div>
    Ingredients: <input name="Ingredients" type="text"></input> Quantity: <input name="Quantities" type="text"></input>
    <br />
    <button onClick={this.addIngredientForm}>+</button>
    </div>
    )
  }

  render () {
    // const filteredCocktails = this.state.cocktails.filter(t => t.description.includes(this.state.searchTerm))
    return (
      <div className="Wrapper" id="wrap">
      <div id="Left-List">
        <ListContainer cocktails={this.state.cocktails} handleSelected={this.handleSelected}/>
        <button onClick={this.renderNewList}>TEST</button>
      </div>
        <div id="Center-Detail">
          <DetailContainer selected={this.state.selected} ingredients={this.state.ingredients}/>
        </div>
        <div id="Right-Form">
          <FormContainer renderNewList={this.renderNewList} cocktailID={this.state.cocktails.length} ingredientID={this.state.ingredient_array.length}/>
        </div>

      </div>
    )
  }
}

export default BoozerContainer;
