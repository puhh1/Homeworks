class Users {
    constructor(options) {
        this.name = options.name
        this.pass = options.pass
    }

    get Info(){
        if (this.name.length > 5 && this.pass.length > 5) checked.push(this.name,this.pass)
    }
}

let checked = [];

class User extends Users {
}

const user = new Users({
    name: '123123',
    pass: '123123',
})
console.log(user.Info)
console.log(checked)