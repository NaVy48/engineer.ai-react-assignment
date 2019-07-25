import React from 'react';
import EgHOC from './EgHOC';

const EgAPICall = function(props) {
  return <div>{props.data}</div>;
};

export default EgHOC(EgAPICall, '/api/eg-test');
