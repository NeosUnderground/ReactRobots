//Child of Cardlist.js
//this compoenent is for each of the robot cards, which is passed the name, email, id properties (which are destructured) into the H2 and p tags. The API is generating the robot images and are uniquely assigned to the robots based on their differing Ids.

import React from 'react';

const Card = ({name, email, id}) => {
  return (
    <div className='tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?200x200`} alt='robot'/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
