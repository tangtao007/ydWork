// import lodash from "lodash-es";
import {isArray} from "lodash-es"
import item from './sync.css';
const sync = function(){
  console.log("sync");
  document.getElementById("app").innerHTML = `<ch1 class="${item.test}">我是样式</ch1>`;
}

const isCheckArray = function(args){
  console.log(isArray(args));
}
export {
  sync,
  isCheckArray
}