import {
  sync
} from "./components/sync/index"
console.log("Hello webpack");
sync();
import(/* webpackChunkName: "async-test" */ './components/async/index.js').then(_=>{
  _.default.init();
});