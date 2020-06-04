import React from 'react';
import { connect } from 'react-redux';

const Item = props => {
  let d = props.value.created;
  let f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
  return (
  <tr><th>No, {props.index}</th>
    <td>{props.value.message}</td>
    <td>{f}</td>
  </tr>
  );
}
export default connect()(Item);