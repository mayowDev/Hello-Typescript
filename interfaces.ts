// function interfaces


/*
function mytod(todo:{title:string,text:string}){
    console.log( todo.title +': '+todo.text)
}
let todo= {title:'trash',text: 'take out the trash'};

mytod(todo)
*/


// organized way to use interface

interface Todo{
    title:string;
    text:string;
}
// applying interfaces in functions

function showtodo(todo:Todo){
    console.log(todo.title+': '+todo.text)
}

let Task={title:'Gym', text:'Hiit exercise'};

showtodo(Task)

// 