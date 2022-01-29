const assert = require('assert')
const fizzBuzz = require('../src/fizzbuzz.js')

describe ('fizzBuzz', function() {
    it ('should resolve 1 for number 1', function() {
        assert.equal(fizzBuzz.resolve(1),'1')
    }) 

    it ('should resolve 2 for number 2', function() {
        assert.equal(fizzBuzz.resolve(2),'2')
    }) 
    it ('should resolve fizz for number 3', function() {
        assert.equal(fizzBuzz.resolve(3),'Fizz')
    }) 
    it ('should resolve buzz for number 5', function() {
        assert.equal(fizzBuzz.resolve(5),'Buzz')
    }) 

    it ('should resolve fizzbuzz for number 15', function() {
        assert.equal(fizzBuzz.resolve(15),'FizzBuzz')
    }) 

    it ('should resolve fizzbuzz for firts 36 numbers', function() {
        assert.equal(fizzBuzz.run(36),'1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,FizzBuzz,31,32,Fizz,34,Buzz,Fizz')
    }) 
})