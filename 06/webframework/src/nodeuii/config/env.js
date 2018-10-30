const dev = {
  init:function(){
    if(process.env.NODE_ENV == "development"){
      console.log("development");
    }
    if(process.env.NODE_ENV == "testing"){
      console.log("testing");
    }

    if(process.env.NODE_ENV == "production"){
      console.log("production");
    }
  }
}

export default dev;