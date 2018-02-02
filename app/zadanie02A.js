    const text = ['Node.js', "się", "Witam", "i korzystam", "w konsoli", "z funkcji czasu",'z', "programem"];
    const clear = [text[0].length,
                    text[1].length,
                    text[2].length,
                    text[3].length,
                    text[4].length,
                    text[5].length,
                    text[6].length,
                    text[7].length
                    ]

    const intervalOne = setInterval(() => {
        console.log(text[0]);
        if (clear[0] === text[0].length){
          clearInterval(intervalOne);
        }
    }, 4000);


    const intervalTwo = setInterval(() =>{
        console.log(text[1]);
        if (clear[1] === text[1].length){
          clearInterval(intervalTwo);
        }
    }, 1000)


    const intervalThree= setInterval(() =>{
        console.log(text[2]);
        if (clear[2] === text[2].length){
          clearInterval(intervalThree);
        }
    }, 1)


    const intervalFour = setInterval(() =>{
        console.log(text[3]);
        if (clear[3] === text[3].length){
          clearInterval(intervalFour);
        }
    }, 6000)


    const intervalFive = setInterval(() =>{
        console.log(text[4]);
        if (clear[4] === text[4].length){
          clearInterval(intervalFive);
        }
    }, 5000)


    const intervalSix = setInterval(() =>{
        console.log(text[5]);
        if (clear[5] === text[5].length){
          clearInterval(intervalSix);
        }
    }, 7000)


    const intervalSeven = setInterval(() =>{
        console.log(text[6]);
        if (clear[6] === text[6].length){
          clearInterval(intervalSeven);
        }
    }, 2000)


    const intervalEight = setInterval(() =>{
        console.log(text[7]);
        if (clear[7] === text[7].length){
          clearInterval(intervalEight);
        }
    }, 3000)
