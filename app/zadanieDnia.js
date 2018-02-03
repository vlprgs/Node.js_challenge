
    let [element, index, ...array] = [...process.argv];

        array.forEach((element) => {
            setTimeout(() => {console.log(element)},parseInt(element,10)*1000);
        });
        //toDo: przy większych liczbach zajmuje to wiecej czasu, więc lepiej zmienic timeout na stały, niski i niezalezny od wprowadzonej cyfry
