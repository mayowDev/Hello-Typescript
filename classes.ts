// =============class in typescript========
interface userInterface{
    name:string;
    email:string;
    age:number;
    payinfoice();
    register();
    
};

// applying/implementing interfaces to class

class user implements userInterface{
    //properties

    name:string;
    email:string;
    age:number;
    constructor(name:string,email:string,age:number){
        this.name=name;
        this.email=email;
        this.age=age;


        console.log('user created'+': '+ this.name);
        
    }

    //methods

    register(){
        console.log(this.name+' is registered')
    }

    payinfoice(){
        console.log(this.name+' paid his due')
    }
}

let ali =new user('ali','ali@gmail.com',22);

ali.register()


// =============================class inheritance========================

class member extends user{
    id:number
    constructor(id:number,name:string,email:string,age:number){
        super(name,email,age) //super is tells to inheritaed these properties
        this.id=id
    }
    payinfoice(){
        super.payinfoice()
    }
    
}

let mayow:user=new member(2,'ali','ali@Blhss.com',25)
mayow.payinfoice()

// property= key value pairs
// method= function inside the class
// constructor()= method that runs with this class

//====== class with static typing===

// ==============Access modifiers=======================


// private: we cant acces the value from outside
//public: we can acces like normall
//protect: we can acces it through  inherited class