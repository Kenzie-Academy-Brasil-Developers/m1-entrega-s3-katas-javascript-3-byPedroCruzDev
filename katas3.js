const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1(numbers){
    
    let count = [];
    for(let index=1; index <= numbers; index++){
        count.push(index)
    } return count
}
console.log(kata1(25))

//------------------------------

function kata2(numbers){

    let count = [];
    for(let index = 25; index>=numbers; index --){
        count.push(index)
    }return count
}
console.log(kata2(1))

//------------------------------

function kata3(numbers){

    let count = [];
    for(let index = -1; index>=numbers; index --){
        count.push(index)
    }return count
}
console.log(kata3(-25))

//------------------------------

function kata4(numbers) {
   
    let counter = [];

    for(let index = -25; index <= numbers; index++){
        counter.push(index)
    }return counter
}
console.log(kata4(-1))

//------------------------------

function kata5(numbers) {

    let counter = [];
    for(let index = 25; index >= numbers; index --){

        if(index % 2 !== 0){
            counter.push(index)
        }
    }return counter
}
console.log(kata5(-25))

//------------------------------

function kata6(numbers) {
    
    let counter=[];

    for(let index = 1; index < numbers; index++){
        if(index % 3 === 0){
            counter.push(index)
        }
    }return counter
}
console.log(kata6(100))

//------------------------------

function kata7(numbers) {
    
    let counter =[];

    for(let index = 1; index <= numbers; index ++){

        if(index % 7 === 0) counter.push(index)
    }return counter
}
console.log(kata7(100))

//-------------------------------

function kata8(numbers) {
    
    let counter =[];

    for(let index = 1; index <= numbers; index ++){

        if(index % 7 === 0 || index % 3 === 0) counter.push(index)
    }return counter
}
console.log(kata8(100))

//-------------------------------

function kata9(numbers) {

    let counter = [];

    for(let index = 1; index <= numbers; index++){

        if(index % 5 === 0 && index % 2 !== 0){
            counter.push(index)
        }
    }return counter
}
console.log(kata9(100))

//-----------------------------------

function kata10() {

    let counter = [];
    for(let index=0; index < sampleArray.length; index++){
        counter.push(sampleArray[index])
    }return counter
}
console.log(kata10())

//--------------------------------

function kata11() {
    
    let counter = [];
    for(let index=0; index < sampleArray.length; index++){
        if(sampleArray[index] % 2 === 0){
            counter.push(sampleArray[index])
        }
    }return counter
}
console.log(kata11())

//-------------------------------------

function kata12() {
    
    let counter = [];
    for(let index=0; index < sampleArray.length; index++){
        if(sampleArray[index] % 2 !== 0){
            counter.push(sampleArray[index])
        }
    }return counter
}
console.log(kata12())

//----------------------------------------

function kata13() {
    
    let counter = [];

    for(let index = 0; index < sampleArray.length; index ++){
        if(sampleArray[index]%8===0) counter.push(sampleArray[index])
    }return counter
}
console.log(kata13())

function kata14() {

    let counter = [];
    for(let index=0; index < sampleArray.length; index ++){
        counter.push(sampleArray[index] ** 2)
    }
        return counter
}
console.log(kata14())

//------------------

function kata15(numbers) {

    let counter=0;
    for(let index = 0; index < numbers; index++){
        counter+= index
    }
        return counter 
}
console.log(kata15(20))
//--------------------------------

function kata16() {

    let counter=0;
    for(let index=0; index < sampleArray.length; index ++){
        counter += sampleArray[index]
    }
    return counter ++
}
console.log(kata16())

function kata17() {

    let counter=0;
    for(let index=0; index < sampleArray.length; index ++){
        counter = Math.min(...sampleArray)

    }
        return counter
}
console.log(kata17())

//------------------------------------------------

function kata18() {
    let counter = [];

    for(let index = 0; index < sampleArray.length; index++){
        counter = Math.max(...sampleArray)

    }
        return counter
}

console.log(kata18())

//não consegui achar uma meneira de achar a maximo e o minimo valor, sem o Math, caso haja uma maniera gostaria de saber

