// function interfaces
/*
function mytod(todo:{title:string,text:string}){
    console.log( todo.title +': '+todo.text)
}
let todo= {title:'trash',text: 'take out the trash'};

mytod(todo)
*/
function showtodo(todo) {
    console.log(todo.title + ': ' + todo.text);
}
var Task = { title: 'Gym', text: 'Hiit exercise' };
showtodo(Task);
// =============class in typescript========
// property= key vaue pairs
// method= function inside the class
// constructor()= method that runs with this class
//====== class with static typing===
var user = /** @class */ (function () {
    function user(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('user created' + ': ' + this.name);
    }
    return user;
}());
var ali = new user('ali', 'ali@gmail.com', 22);
