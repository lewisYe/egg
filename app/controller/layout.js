'use strict';

const Controller = require('egg').Controller;

class LayoutController extends Controller {
  async index() {
    const { ctx } = this;
    const assets = await ctx.service.layout.getAssets();
    await ctx.renderTel('body.html', { assets });
  }
}

module.exports = LayoutController;
