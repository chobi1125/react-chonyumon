import React, { useState } from 'react';
import { connect } from 'react-redux';
import { findMemo } from './Store';

let FindForm = props => {
  
  const  [find, setFind] = useState('');

  let doChange = e => setFind(e.target.value);

  let doAction = e => {
    e.preventDefault();
    let action = findMemo(find);
    props.dispatch(action);
  }

  return (
    <form onSubmit={doAction}>
      <input type="text" size="10" onChange={doChange}
        value={find} />
      <input type="submit" value="Find"/>
    </form>
  );
}
export default connect((state)=>state)(FindForm);
