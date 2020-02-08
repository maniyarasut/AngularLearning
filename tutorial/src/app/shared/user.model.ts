import { Address } from './address';

export class User {
    constructor(public name:string,  public id:string,public email:string,public dateOfBirth:string,private address:Address)
    {

    }
}