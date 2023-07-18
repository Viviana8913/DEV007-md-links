import fs from 'fs';
import path from 'path';

// la variable devuelve la promesa
export const mdLinks = (route, options) => {
  // tanto reject como resolve son funciones
  return new Promise((resolve, reject) => {
    // si existe la ruta
    if (fs.existsSync(route)) {
      // la ruta es absoluta
      if (!path.isAbsolute(route)) {
        // convertir la ruta en absoluta
        const pathAbsolute = path.resolve(route);
        // ruta absoluta de la ruta
        resolve(pathAbsolute);
      } else {
        // siendo ya absoluta, resuelve la promesa con esa ruta
        resolve(route);
        console.log(route);
      }
    } else {
      // se rechaza la promesa si la ruta no existe
      reject('No existe la ruta');
    }
  });
};
