//This componenet will add a scrollable area that can surround a child componenet.

import React from 'react';

const Scroll = (props) => {
  return(
    <div style={{overflow: 'scroll', borderRadius:'5px', height: '80vh', }}>
      {props.children}
    </div>
  )
}
export default Scroll;
