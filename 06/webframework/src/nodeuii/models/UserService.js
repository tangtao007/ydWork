import { reject } from "any-promise";

class UserService{
  constructor(){

  }
  get(id){
    return new Promise((resolve,reject) => {
      setTimeout(function(){
        resolve("Hello World"+"["+id+"]");
      },1000);
    });
  }
}

export default UserService;