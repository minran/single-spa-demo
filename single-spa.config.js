import { registerApplication, start } from 'single-spa';
import {
  loadApp,
} from './src/utils/index.js'



//start();

async function init() {
  const loadingPromises = [];
  registerApplication(
    'home',
    () => import('./src/home/home.app.js'),
    (location) => location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith("/home")
  )
  registerApplication(
    'navBar',
    () => import('./src/navBar/navBar.app.js').then(module => module.navBar),
    () => true
  )
  /*loadingPromises.push(loadApp('home', '/', './src/home/home.app.js', null, null));*/
  //loadingPromises.push(loadApp('navBar', '/navBar', './src/navBar/navBar.app.js', null, null));
  /*await Promise.all(loadingPromises);*/
  start();
}

init();

