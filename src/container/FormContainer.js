import React from 'react';
import Form from '../components/Form'

class FormContainer extends React.Component {
  state = {
    cocktail: {
      name: "",
      description: "",
      instructions: ""},
    proportion: {
      amount: "",
      cocktail_id: 1,
      ingredient_id: 1},
    ingredient: {
      name: ""}
  }

handleSubmit = (event) => {
  event.preventDefault();
  this.props.renderNewList(this.state)
  this.setState({
    cocktail: {
      name: "",
      description: "",
      instructions: ""},
    proportion: {
      amount: "",
      cocktail_id: 1,
      ingredient_id: 1},
    ingredient: {
      name: ""}
  })
}

  handleCocktailChange = (event) => {
    this.setState({
      cocktail: {
      [event.target.name]: event.target.value,
      } 
    })
    console.log(this.state)
  }

  handleIngredientName = (event) => {
      let newStuff = event.target.value
    this.setState({
            proportions: {
              ...this.state.proportions,
              ingredient_name: event.target.value,
            }
        })


    // this.setState((prevState, newStuff) => ({
    //
    //   proportions: [{
    //       ...this.state.proportions,
    //       ingredient_name: event.target.value,
    //     }]
    //   })
    // )

    console.log(this.state)
  }

  handleAmount= (event) => {
    this.setState({
      proportions: [{
        ingredient_name: this.state.proportions.ingredient_name,
        amount: event.target.value
      }]
    })
    console.log(this.state)
  }

  render()
  {
    return (
      <div align="right" style={{padding:10 }} >
        <form onSubmit={this.handleSubmit}>
          Name: <input name="name" value={this.state.cocktail.name} onChange={this.handleCocktailChange} type="text"></input>
          <br />
          Description: <textarea name="description" value={this.state.cocktail.description} onChange={this.handleCocktailChange} type="text"></textarea>
          <br />
          Instructions: <textarea name="instructions" value={this.state.cocktail.instructions} onChange={this.handleCocktailChange} type="text"></textarea>
          <br />
          <h3>Proportions:</h3>

          <button type="submit">Submit</button>
        </form>
      </div>
  )}
}

export default FormContainer;
