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

  handleChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value,
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
        < Form handleSubmit={this.handleSubmit} handleIngredientName={this.handleIngredientName} handleAmount={this.handleAmount} name={this.state.name} description={this.state.description} instructions={this.state.instructions} proportions={this.state.proportions}/>
  )}
}

export default FormContainer;
