      const fs = require('fs');

// fs.readdir('./data/zadanie02/', 'utf8',(err,files) => {
//       if (err === null){
//          files.forEach(file => {
//            fs.readFile("./data/zadanie02/+${file}", 'utf8',(err,data) =>{
//              if (err === null){
//                console.log(data);
//              } else {
//                console.log("Blad odczytania pliku");
//              }
//
//          })
//           console.log('Wynik z pliku:', files);
//       } else {
//           console.log('Wystąpił błąd odczytu', err);
//       }
//       });
      fs.readdir('./data/zadanie02/', (err, files) => {
          if (err === null){

             files.forEach( file => {
                 fs.readFile(`./data/zadanie02/${file}`, 'utf8', (err, data) => {
                     if (err === null){
                         console.log(`Zaladowano plik ${file}. Zawartosc: `, data);
                     } else {
                         console.log('Wystąpił błąd odczytu', err);
                    }
                 });
              });
          } else {
              console.log('Wystąpił błąd odczytu', err);
            }
          });
