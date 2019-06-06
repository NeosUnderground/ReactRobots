//child of App.js
//Parent of Card.js
//this compoenent is for the number of cards displayed based on the input data.

import React from 'react';
import Card from './Card';

//is passed the robots property which is destructured. Then the robots array is mapped, which takes the "users", and "i" parameters. The key, id, name, and email variables are assigned the values from the array which can then be passed to the card compoenet.
const CardList = ({robots}) => {
  return (
    <div>
      {robots.map((user, i) =>{
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}/>
        );
      })
      }
    </div>
  );
}

export default CardList;
