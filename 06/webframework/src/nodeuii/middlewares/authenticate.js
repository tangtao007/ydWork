const authenticate = () => {
  return (target,next,desc)=>{
    console.log("路由守护",target);
    return next();
    //target.redirect('http://www.baidu.com');
  }
};
export default authenticate;