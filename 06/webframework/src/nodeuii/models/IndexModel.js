import { reject } from "any-promise";

class IndexModel{
  constructor(){

  }
  getData(){
    return new Promise((resolve,reject) => {
      setTimeout(function(){
        resolve("Hello World");
      },1000);
    });
  }
}

export default IndexModel;