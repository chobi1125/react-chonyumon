import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Memo from './memo/Memo';
import AddForm from './memo/AddForm';
import FindForm from './memo/FindForm';
import DelForm from './memo/DelForm';

const App = () => {
  const td = {
    width:"250px"
  }
  return (
    <div>
      <h1>Memo</h1>
      <AddForm />
      <hr />
      <table><tbody><tr>
        <td style={td}><FindForm /></td>
        <td style={td}><DelForm /></td>
      </tr></tbody></table>
      <Memo />
    </div>
  );
}

export default connect()(App);