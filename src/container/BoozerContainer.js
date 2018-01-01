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
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cocktails/')
    .then(data => data.json())
    .then(data => this.setState({ cocktails: data.cocktail }));
  }

  // name: cocktail.name,
  // description: cocktail.description,
  // instructions: cocktail.instructions,
  // proportions: [{
  //   ingredient_name: cocktail.proportions.ingredient_name,
  //   amount: cocktail.proportions.amount
renderNewList=()=>{
  console.log("Hello")
    fetch('http://localhost:3000/api/v1/cocktails/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cocktail: {
          name: "COCKTAIL TEST6",
          description: "DESCRIPTION TEST",
          instructions: "INSTRUCTION TEST"},
        proportion: {
          amount: "AMOUNT TEST6",
          cocktail_id: 1,
          ingredient_id: 1},
        ingredient: {
          name: "TEST6"}
        })
    })
    .then(data=>data.json())
    .then(cocktail=>{
      this.setState((prevState) => {
        return {cocktails: [...prevState.cocktails, cocktail]};
      });
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
      // <ListContainer cocktails={this.state.cocktails} handleSelected={this.handleSelected}/>
    // const filteredCocktails = this.state.cocktails.filter(t => t.description.includes(this.state.searchTerm))
    return (
      <div className="Wrapper" id="wrap">
      <div id="Left-List">
        <button onClick={this.renderNewList}>TEST</button>
      </div>
        <div id="Center-Detail">
          <DetailContainer selected={this.state.selected} ingredients={this.state.ingredients}/>
        </div>
        <div id="Right-Form">
          <FormContainer renderNewList={this.renderNewList}/>
        </div>

      </div>
    )
  }
}

export default BoozerContainer;
