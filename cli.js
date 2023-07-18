import chalk from 'chalk';
import { mdLinks } from './index.js';

mdLinks('/ruta/no_existente')
.then((routeAbsolute) => {
    console.log(routeAbsolute);
})
.catch((error) =>{
    console.log(chalk.inverse.bgRed(error));
});

mdLinks('./README.md')
.then((routeAbsolute) => {
    console.log(chalk.bgGreen(routeAbsolute));
})
.catch((error) => {
    console.error(chalk.bgGreen('Error:', error));
});