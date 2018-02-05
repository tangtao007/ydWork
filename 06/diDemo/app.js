// 帮助你实现DI的库
const awilix = require('awilix');
// Create the container and set the injectionMode to PROXY (which is also the default).
// 创建一个容器 实现通过将Model的方式注入
const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY
})
// 实现一个基本的controller
// This is our app code... We can use
// factory functions, constructor functions
// and classes freely.
class UserController {
  // We are using constructor injection.
  // 以后的注入方式 都是通过constructor 他会将实例化后的类注入到你的类里
  constructor(opts) {
    // Save a reference to our dependency.
    // 构建一个userService = 参数里注入进的userService
    this.userService = opts.userService
  }

  // imagine ctx is our HTTP request context...
  getUser(ctx) {
    return this.userService.getUser(22)
  }
}

container.register({
  // Here we are telling Awilix how to resolve a
  // userController: by instantiating a class.
  userController: awilix.asClass(UserController)
})

// Let's try with a factory function.
// 实现一个model
const makeUserService = () => {
  // Notice how we can use destructuring
  // to access dependencies
  // 这个东西就是一个服务 为了将来去注入用的
  return {
    getUser: id => {
      return id + 44
    }
  }
}

container.register({
  // the `userService` is resolved by
  // invoking the function.
  // 被定义成一个方法 把电话放入电话本
  userService: awilix.asFunction(makeUserService)
})

console.log(container.resolve('userController').getUser());