import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteMemo } from './Store';


let DelForm = props => {
  
  const [del, setDelete] = useState(0);

  let doChange = e => setDelete(e.target.value);

  let doAction = e => {
    e.preventDefault();
    let action = deleteMemo(del);
    props.dispatch(action);
    setDelete(del);
  }
  let n = 0;
  let items = props.data.map((value)=>(
    <option key={n} value={n++}>{value.message.substring(0,10)}</option>
  ));
  return (
    <div>
      <form onSubmit={doAction}>
      <select onChange={doChange}
        defaultValue="-1">
        {items}
      </select>
      <input type="submit" value="Del"/>
      </form>
    </div>
  );
}

export default connect((state)=>state)(DelForm);
