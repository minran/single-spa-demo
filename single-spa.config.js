import { registerApplication, start } from 'single-spa';

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
start();