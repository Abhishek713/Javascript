// function a (name,callback) {
//         console.log( `Hi ${name}`);
//     callback();
// }

// function b(){
//     console.log(`Hi Honey`);
// }

// a('Abhishek',b);

let p1 = {
    firstName: 'Abhishek',
    lastName: 'Dutt'
}

let p2 = {
    firstName: 'Daisy',
    lastName: 'Shah'
}

function sayHello(greting){
    console.log(`${greting} ${this.firstName} ${this.lastName}`);
}
sayHello.apply(p1,['welcome']);
sayHello.apply(p2,['welcome']);