// problem 1

/*this function performs arithmetic operations as addition,
 subtraction, multiplication and division. */

function mindGame(posnumber){
    if(typeof posnumber !== "number"){
        throw Error("Input must be a number");
    }
    return ((((posnumber * 3) + 10) / 2) -5);
}


// problem 2

/*this function clarifies if the letter number of the 
input string are in even number or odd number. */

function evenOdd(str){
    if(typeof str !== "string"){
        throw Error("Input must be a string not a number");
    }
    
    if(str.length %2 === 0 )
    return "even";
    else
    return "odd";
}


// problem 3

/*this function clarifies if the input number is less than 7 or not. */

function isLGSeven(num){
    if(typeof num !== "number"){
        throw Error("Input must be a number");
    }

    let result = num - 7;
    if(result > 7){
        return num * 2;
    }
    else
    return result;
}


// problem 4

/* this findingBadData function classifies the data in an as good or bad
based on their positive and negative sign. Then the function returns the number of negetive data. */

function findingBadData(data){
    if(!Array.isArray(data)){
        throw Error("Input must be an array"); 
    }
  let badData = 0;
    for(let i = 0; i < data.length; i++){
        if(data[i] < 0){
        badData++;
        }
    }
    return parseInt(badData);
}

/* try{
    let result = findingBadData(2, -1, 3);
    console.log(result);
}
catch(error){
    console.error(error);
} */


//   console.log(findingBadData([-2, -5, 7, 13, -4]));


// problem 5

/* This function converts gems to diamond. Here we have 3 gems as input. We
 gotta multiply 21,32,43 respectively with those gems. Then we gotta add them together. 
 If the total answer is greater than (1000 * 2) then 2000 will be subtracted from that 
 total answer. Again if the answer is less than 2000 then it will be the output */

function gemsToDiamond(gem1, gem2, gem3){
    if(typeof gem1 !== 'number' || typeof gem2 !== 'number' || typeof gem3 !== 'number'){
        throw Error("Input must be a number");
    }
     
    let total = (gem1 * 21) + (gem2 * 32) + (gem3 * 43);
    if(total > (1000 * 2)) {
        total -= 2000;
    }
    return total;       
}

/* try{
    let gem1 = '2', gem2 = 1, gem3 = 1;
    let value = gemsToDiamond(gem1, gem2, gem3);
    console.log(value);
}
catch(error){
    console.error(error.message);
} */



