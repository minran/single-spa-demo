import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Home from './root.component.js';

function domElementGetter() {
  let el = document.getElementById('home');
  if (!el) {
    el = document.createElement('div');
    el.id = 'home';
    document.body.appendChild(el);
  }

  return el
}

if (process.env.NODE_ENV === 'development') {
  // 开发环境直接渲染
  ReactDOM.render(<Home />, document.getElementById('home'))
}

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Home,
    domElementGetter,
})

export function bootstrap(props) {
	return reactLifecycles.bootstrap(props);
}

export function mount(props) {
  return reactLifecycles.mount(props)
}

export function unmount(props) {
  return reactLifecycles.unmount(props)
}
;
