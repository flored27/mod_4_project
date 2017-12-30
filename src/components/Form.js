import React from 'react';


const Form = (props) => {
  return (
  <div align="right" style={{padding:10 }} >
    <form onSubmit={props.handleSubmit}>
      Name: <input name="name" value={props.name} onChange={props.handleChange} type="text"></input>
      <br />
      Description: <textarea name="description" value={props.description} onChange={props.handleChange} type="text"></textarea>
      <br />
      Instructions: <textarea name="instructions" value={props.instructions} onChange={props.handleChange} type="text"></textarea>
      <br />
      Ingredients: <input name="ingredient_name" value={props.proportions.ingredient_name} onChange={props.handleIngredientName} type="text"></input> Quantity: <input name="amount" value={props.proportions.amount} onChange={props.handleAmount} type="text"></input>
      <br />
      <h3>Proportions:</h3>

      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Form;
