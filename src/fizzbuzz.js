function resolve(number) {
    if (number % 15 === 0)
        return 'FizzBuzz'
    else if (number %3 === 0)
        return 'Fizz'
    else if (number % 5 === 0)
        return 'Buzz'
    else
        return number.toString();
}

function run(number){
    if (number === 1) {  
        return resolve(number)
    }
    else {
        return run(number -1) + ',' + resolve(number)
         
    }
    return output
}

module.exports = { resolve, run }