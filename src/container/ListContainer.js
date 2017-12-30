import React from 'react';
import List from '../components/List'
import '../css/List.css';

const ListContainer = (props) => {

  const handleClick = (c) => {

    props.handleSelected(c)
  }

    const cocktails = props.cocktails.map(c => <li onClick={()=>{handleClick(c)}}> {c.name}</li>)


  return (
    <div align="left" style={{padding:10}} >
      <ul>
        {cocktails}
      </ul>
    </div>
  )
}


export default ListContainer;
