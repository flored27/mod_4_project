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
      <h3>Proportions:</h3>

      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Form;
