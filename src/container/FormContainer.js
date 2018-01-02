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
    const field = event.target.name
    const value = event.target.value
    this.setState(prevState=>{
      return {
        cocktail: {
          ...prevState.cocktail,
        [field]: value
        }
      }
    })
  }

  handleIngredientChange = (event) => {
    const value = event.target.value
    this.setState(prevState=>{
      return {
        ingredient: {
          ...prevState.ingredient,
        name: value
        }
      }
    })
  }

  handleProportionChange = (event) => {
    const value = event.target.value
    const orgCocktail = this.state.proportion.cocktail_id
    const orgIngredient = this.state.proportion.ingredient_id
    this.setState(prevState=>{
      return {
        proportion: {
          ...prevState.proportion,
        amount: value,
        cocktail_id: 2,
        ingredient_id: 2
        }
      }
    })
  }

  // handleProportionId = () => {

  //   if ()
  //   this.setState({
  //     ...this.state.proportion,
  //
  //   })
  // }

  render()

  {
    console.log(this.state)
    return (
        < Form handleSubmit={this.handleSubmit} handleCocktailChange={this.handleCocktailChange} handleIngredientChange={this.handleIngredientChange} handleProportionChange={this.handleProportionChange} formState={this.state}/>
  )}
}

export default FormContainer;
