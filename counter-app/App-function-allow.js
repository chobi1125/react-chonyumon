import React from 'react';
import { connect } from 'react-redux';
import './App.css';

const mappingState = state =>  state ;
// Appコンポーネント
const App = () => {
  const style = {
    color: "blue"
  }
  return (
    <div>
      <h1 style={{color: "blue"}}>Redux</h1>
      <h1 style={style}>Redux</h1>
      <Message />
      <Button />
    </div>
  );
}
// メッセージ表示のコンポーネント
let Message = props => <p>{props.message}: {props.counter}</p>;
// ストアのコネクト
Message = connect(mappingState)(Message);
// ボタンのコンポーネント
let Button = props => {
  let doAction = e => {
    if (e.shiftKey){
      props.dispatch({ type:'DECREMENT' });
    } else {
      props.dispatch({ type:'INCREMENT' });
    }
}
  return (
    <button onClick={doAction}>
      click
    </button>
  );
}
// ストアのコネクト
Button = connect()(Button);
export default App;