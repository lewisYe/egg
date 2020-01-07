'use strict';
const pageConfig = {
  pms() {
    return {
      assetId: 'pms',
      data: { title: 'PMS', sidebar: true, viewFramework: false },
      params: {},
    };
  },
  community() {
    return {
      assetId: 'community',
      data: { title: 'community', sidebar: true, viewFramework: false },
      params: {},
    };
  },
};
module.exports = () => {
  return async function(ctx, next) {
    const path = ctx.router.match(ctx.path).path[0]; // 获取路由的别名
    if (pageConfig[path.name]) {
      ctx.runtimeContext = pageConfig[path.name]();
    }
    await next();
  };
};
