import React from 'react';
import ReactDOM from 'react-dom';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

const Component4=Component3(Component1,Component2);
export default Component4;

