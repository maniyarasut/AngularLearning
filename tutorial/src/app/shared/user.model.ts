import { Address } from './address';

export class User {
    constructor(public name:string,  public id:string,public email:string,public dateOfBirth:Date,private address:Address)
    {

    }
}