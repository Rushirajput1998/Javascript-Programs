const user={
    _email:"shindev9805@gmail.com",
    _password:"rishi123",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this.email=value;
    }
}

const u1=Object.create(user);

console.log(u1.email);

