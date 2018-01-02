import React from 'react';


const Form = (props) => {
  return (
  <div align="right" style={{padding:10 }} >
    <form onSubmit={props.handleSubmit}>
      <h3>Cocktail:</h3>
      Name: <input name="name" value={props.formState.cocktail.name} onChange={(event)=>{props.handleCocktailChange(event)}} type="text"></input>
      <br />
      Description: <textarea name="description" value={props.formState.cocktail.description} onChange={(event)=>{props.handleCocktailChange(event)}} type="text"></textarea>
      <br />
      Instructions: <textarea name="instructions" value={props.formState.cocktail.instructions} onChange={(event)=>{props.handleCocktailChange(event)}} type="text"></textarea>
      <br />
      <h3>Ingredients:</h3>
      Name:  <input name="name" value={props.formState.ingredient.name} onChange={(event)=>{props.handleIngredientChange(event)}} type="text"></input>
      Amount: <input name="amount" value={props.formState.proportion.amount} onChange={(event)=>{props.handleProportionChange(event)}} type="text"></input>


      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Form;
