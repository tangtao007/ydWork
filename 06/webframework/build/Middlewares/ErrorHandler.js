'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const ErrorHandler = {
  error(app, logger) {
    app.use(async (ctx, next) => {
      try {
        console.log('1');
        await next();
        console.log('2');
      } catch (err) {
        console.log('.....................');
        logger.error(err);
        ctx.status = err.status || 500;
        ctx.body = 500;
      }
    });
    app.use(async (ctx, next) => {
      console.log('2.1');
      await next(); // 1
      console.log('2.1.1');
      if (404 != ctx.status) {
        return;
      }
      console.log('2.1.2');
      logger.error("没有这个地址");
      ctx.status = 404;
      ctx.body = 404;
    });
    app.use(async (ctx, next) => {
      console.log('3.1');
      await next(); // 1
      console.log('3.1.1');
    });
  }
};

exports.default = ErrorHandler;