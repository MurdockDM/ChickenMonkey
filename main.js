let chickenMonkey = function () {
    for (let numberCount = 1; numberCount <= 100; numberCount++) {
        
        if (numberCount % 7 === 0 && numberCount % 5 === 0) {
            console.log("ChickenMonkey");
        } else if (numberCount % 7 === 0) {
            console.log("Monkey");
        } else if (numberCount % 5 === 0) {
            console.log("Chicken");
        } else {
            console.log(numberCount);
        }
    }
}

chickenMonkey();