const fs = require('fs');
const path = require('path')

function getMdLinks(userPath){
  console.log('recibir un path', userPath)
  console.log('identificar si es ruta absoluta o no (resolver la ruta)')

  if(path.isAbsolute(userPath)){
    console.log('es absoluta')
    //identificar si es archivo o folder
      //si es folder 
        //lee todo los archivos que sean EXTENSION .md
      //si es archivo
        //solo lee ese archivo unico si es de extension .md
        //si no es de extension md entonces.... decir un mensaje retorno (archivo incorrecto no soportado, solo md soportado)

      readFile(userPath)
    //logica de lectura de archivo
  } else{
    const resolvedPath = path.resolve(userPath) // .resolve sirve para convertir un path de relativo a absoluto
    console.log('no es absoluta :c',resolvedPath)
    const stats = fs.statSync(resolvedPath); // The fs.statSync(path) method returns the instance of fs
    console.log('Is path a directory?', stats.isDirectory());
    
    if(stats.isDirectory() === true){
      console.log('Soy un directorio')
    }   
    
  }
  console.log('identificar si es archivo o es folder')
}

function readFile(userPath){
  console.log('yo me dedico a leer archivos y retorno ...? el contenido del archivo')
}

getMdLinks('./test/mock/')

//getMdLinks('/Users/anitalopez/laboratoria/CDMX013-md-links/test')

module.exports = () => {
  // ...
};
