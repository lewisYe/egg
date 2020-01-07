'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const pageConfig = middleware.pageConfig();
  router.get('/', controller.home.index);
  router.get('community', '/community', pageConfig, 'layout.index');
  router.get('pms', '/pms', pageConfig, 'layout.index');
};
