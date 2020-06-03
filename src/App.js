import React from 'react';
import { connect } from 'react-redux';
import './App.css';
// ステートのマッピング
function mappingState(state) {
  return state;
}
// Appコンポーネント
function App() {
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
function Message(props) {
  return (
    <p>
      {props.message}: {props.counter}
    </p>
  );
}
// ストアのコネクト
Message = connect(mappingState)(Message);
// ボタンのコンポーネント
function Button(props) {
  // ボタンクリックでディスパッチを実行
  function doAction(e){
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
