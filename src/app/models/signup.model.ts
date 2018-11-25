export class Signup{
    email:string;
    password:string;
    cpassword:string;
    constructor(
        email:string,
        password:string,
        cpassword:string
    ){ 
        this.email=email;
        this.password=password;
        this.cpassword=cpassword;
    }
}