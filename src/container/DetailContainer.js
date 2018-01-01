import React from 'react';
import '../css/Detail.css';

const DetailContainer = (props) => {

  const handleIngredient = () =>{
    if (props.ingredients) {

      return props.ingredients.proportions.map(ingred => <li key={ingred.id}> {ingred.ingredient_name} ({ingred.amount})</li>)
    }
  }

  return (
    <div>
      <p> {props.selected.name} </p>
      <p> {props.selected.description} </p>
      <p> {props.selected.instructions} </p>
      <p> {props.selected.source} </p>
      <p>
        {handleIngredient()}
      </p>
    </div>
  )
}

export default DetailContainer;
