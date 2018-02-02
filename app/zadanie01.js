const text = 'Raf Sol';
const GreetText = "Wita sie z world!"
let counter = [text.length, GreetText.length]

const intervalname = setInterval(() => {
    console.log(text);


    if (counter[0] === text.length){
        clearInterval(intervalname);
    }
}, 2000);

const intervalGreet = setInterval(() =>{
    console.log(GreetText);
    if (counter[1] === GreetText.length){
      clearInterval(intervalGreet);
    }
}, 4000)
