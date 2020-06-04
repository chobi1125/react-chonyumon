import React, { useState } from 'react';
import { connect } from 'react-redux';
import { findMemo } from './Store';


let FindForm = props => {
  let state = {
    find:''
  }
  // let doChange = () => {doChange.bind();}
  // let doAction = () => {doAction.bind();}

  let doChange = e => {
    // let setState = () => ({
    //   find: e.target.value
    // });
    let [state, setState] = useState({
      find: e.target.value
    });
  }

  let doAction= e => {
    e.preventDefault();
    let action = findMemo(state.find);
    props.dispatch(action);
  }


    return (
      <form onSubmit={doAction}>
        <input type="text" size="10" onChange={doChange}
          value={state.message} />
        <input type="submit" value="Find"/>
      </form>
    );
}
export default connect((state)=>state)(FindForm);
