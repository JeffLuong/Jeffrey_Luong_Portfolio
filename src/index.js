import { h, render } from 'preact'
import './global.scss';
import App from './components/app';

const element = document.getElementById('app');

render(
  <App />,
  element,
  element.lastChild
);
