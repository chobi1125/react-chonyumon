import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMemo } from './Store';

let AddForm = props => {

  const [message, setMessage] = useState('');

  let doChange = e => setMessage(e.target.value);

  let doAction = e => {
    e.preventDefault();
    let action = addMemo(message);
    props.dispatch(action);
    setMessage('');
  }

  return (
    <div>
      <p>{props.message}</p>
      <form onSubmit={doAction}>
      <input type="text" size="40" onChange={doChange}
        value={message} required />
      <input type="submit" value="Add"/>
      </form>
    </div>
  );
}
export default connect((state)=>state)(AddForm);