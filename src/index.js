import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

const element = <h1>Hello Pizza</h1>
console.log(element)

const root = createRoot(document.getElementById('root'));
root.render(element);