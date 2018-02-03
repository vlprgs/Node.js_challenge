    const fs = require('fs');

    fs.readFile('./data/zadanie01/input.json', 'utf8',(err,data) => {
        if(err===null){
            let sum = 0;
            JSON.parse(data).forEach(i => {sum += i;});
            fs.writeFile('./data/zadanie01/sum.txt', sum, err => {
               if(err===null){
                console.log('Policzono sume');
                    fs.readFile('./data/zadanie01/sum.txt', 'utf8', (err, data) => {
                        if (err === null){
                            console.log('Wynik z pliku:', data);
                        } else {
                            console.log('Wystąpił błąd odczytu', err);
                        }
                        });
              } else{
                console.log('Wystąpił błąd zapisu', err)
              }
            });
      } else{
        console.log('Wystąpił błąd odczytu',err);
      }
    });
