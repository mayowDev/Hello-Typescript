var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
;
// applying/implementing interfaces to class
var user = /** @class */ (function () {
    function user(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('user created' + ': ' + this.name);
    }
    //methods
    user.prototype.register = function () {
        console.log(this.name + ' is registered');
    };
    user.prototype.payinfoice = function () {
        console.log(this.name + ' paid his due');
    };
    return user;
}());
var ali = new user('ali', 'ali@gmail.com', 22);
ali.register();
// =============================class inheritance========================
var member = /** @class */ (function (_super) {
    __extends(member, _super);
    function member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) //super is tells to inheritaed these properties
         || this;
        _this.id = id;
        return _this;
    }
    member.prototype.payinfoice = function () {
        _super.prototype.payinfoice.call(this);
    };
    return member;
}(user));
var mayow = new member(2, 'ali', 'ali@Blhss.com', 25);
mayow.payinfoice();
// property= key value pairs
// method= function inside the class
// constructor()= method that runs with this class
//====== class with static typing===
// ==============Access modifiers=======================
// private: we cant acces the value from outside
//public: we can acces like normall
//protect: we can acces it through  inherited class
