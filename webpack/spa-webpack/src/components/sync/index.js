// import lodash from "lodash-es";
import {isArray} from "lodash-es"
import item from './sync.css';
const sync = function(){
  console.log("sync");
  fetch("/api/test")
  .then(response=>response.json())
  .then(data => {
    console.log("fetch结果",data.message);
  });
  //document.getElementById("app").innerHTML = `<ch1 class="${item.test}">Hello,我是样式!</ch1>`;
}

const isCheckArray = function(args){
  console.log(isArray(args));
}
export {
  sync,
  isCheckArray
}