const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71,
                    456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1(numbers){
    
    let count = [];
    for(let index=1; index <= numbers; index++){
       
        count.push(index) 
        
    } return count
}
console.log("kata1:" +kata1(25))

//------------------------------

 function kata2(numbers){

    let count = [];
    for(let index = numbers; index > 0; index --){
        count.push(index)
    
    }return count
}
console.log("kata2:"+ kata2(25))

//------------------------------

function kata3(numbers){

    let count = [];
    for(let index = -1; index>=numbers; index --){
        count.push(index)
        
    }return count
}
console.log("kata3:"+ kata3(-25))
 
//------------------------------

function kata4(numbers) {
   
    let counter = [];

    for(let index = numbers ; index < 0; index++){
        counter.push(index)
        
    }return counter
}
console.log("kata4:"+kata4(-25))

//------------------------------

function kata5(numbers) {

    let counter = [];
    for(let index = numbers; index >= -25; index --){

        if(index % 2 !== 0){
            counter.push(index)
        }
    }return counter
}
console.log("kata5:"+kata5(25))

//------------------------------

function kata6(numbers) {
    
    let counter=[];

    for(let index = 1; index < numbers; index++){
        if(index % 3 === 0){
            counter.push(index)
        }
    }return counter
}
console.log("kata6:"+kata6(100))

//------------------------------

function kata7(numbers) {
    
    let counter =[];

    for(let index = 1; index <= numbers; index ++){

        if(index % 7 === 0) counter.push(index)
    }return counter
}
console.log("kata7:"+kata7(100))

//-------------------------------

function kata8(numbers) {
    
    let counter =[];

    for(let index = numbers; index > 0; index --){

        if(index % 7 === 0 || index % 3 === 0) counter.push(index)
    }return counter
}
console.log("kata8:"+kata8(100))

//-------------------------------

function kata9(numbers) {

    let counter = [];

    for(let index = 1; index <= numbers; index++){

        if(index % 5 === 0 && index % 2 !== 0){
            counter.push(index)
        }
    }return counter
}

console.log("kata9:"+kata9(100))

//-----------------------------------

function kata10(arr) {

    let counter = [];
    for(let index=0; index < arr.length; index++){
        counter.push(arr[index])
    }return counter
}
console.log("kata10:"+kata10(sampleArray))

//--------------------------------

function kata11(arr) {
    
    let counter = [];
    for(let index=0; index < arr.length; index++){
        if(arr[index] % 2 === 0){
            counter.push(arr[index])
        }
    }return counter
}
console.log("kata11:"+kata11(sampleArray))

//-------------------------------------

function kata12(arr) {
    
    let counter = [];
    for(let index=0; index < arr.length; index++){
        if(arr[index] % 2 !== 0){
            counter.push(arr[index])
        }
    }return counter
}
console.log("kata12:"+kata12(sampleArray))

//----------------------------------------

function kata13(arr) {
    
    let counter = [];

    for(let index = 0; index < arr.length; index ++){
        if(arr[index]%8===0) 
        counter.push(arr[index])
    }return counter
}
console.log("kata13:"+kata13(sampleArray))

function kata14(arr) {

    let counter = [];
    for(let index=0; index < arr.length; index ++){
        counter.push(arr[index] ** 2)
    }
        return counter
}
console.log("kata14:"+kata14(sampleArray))

//------------------

function kata15(numbers) {

    let counter=0;

    for(let index = 0; index < numbers; index++){
        counter+= index
    }
        return counter 
}
console.log("kata15:"+kata15(20))
//--------------------------------

function kata16(arr) {

    let counter=0;
    for(let index=0; index < arr.length; index ++){
        counter += arr[index]
    }
    return counter ++
}
console.log("kata16:"+kata16(sampleArray))

function kata17(arr) {
   return Math.min(...arr)
}
console.log("kata17:"+kata17(sampleArray))

//------------------------------------------------

function kata18(arr) {
    return Math.max(...arr)
        
}

console.log("kata18:"+kata18(sampleArray))



