import React from 'react';


const Form = (props) => {
  return (
  <div align="right" style={{padding:10 }} >
    <form onSubmit={props.handleSubmit}>
      Name: <input name="name" value={props.formState.cocktail.name} onChange={(event)=>{props.handleCocktailChange(event)}} type="text"></input>
      <br />
      Description: <textarea name="description" value={props.formState.cocktail.description} onChange={(event)=>{props.handleCocktailChange(event)}} type="text"></textarea>
      <br />
      Instructions: <textarea name="instructions" value={props.formState.cocktail.instructions} onChange={(event)=>{props.handleCocktailChange(event)}} type="text"></textarea>
      <br />
      <h3>Proportions:</h3>

      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Form;
