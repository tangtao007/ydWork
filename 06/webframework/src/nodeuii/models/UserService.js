import { reject } from "any-promise";

class UserService{
  constructor(){

  }
  get(id){
    return new Promise((resolve,reject) => {
      console.log("id....",id);
      setTimeout(function(){
        console.log("setTimeout");
        resolve("Hello World"+"["+id+"]");
      },100);
    });
  }
}

export default UserService;