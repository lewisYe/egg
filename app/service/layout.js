'use strict';

const Service = require('egg').Service;

class LayoutService extends Service {
  async getAssets() {
    const assets = {
      pms: {},
      community: {
        css: [
          'https://test-community.lvzhuyun.com/assets/1.52340e966d1a5173ad80.css',
          'https://test-community.lvzhuyun.com/assets/0.52340e966d1a5173ad80.css',
        ],
        js: [
          'https://test-community.lvzhuyun.com/assets/manifest.52340e966d1a5173ad80.js',
          'https://test-community.lvzhuyun.com/assets/vendor.52340e966d1a5173ad80.js',
          'https://test-community.lvzhuyun.com/assets/common.52340e966d1a5173ad80.js',
          'https://test-community.lvzhuyun.com/assets/app.52340e966d1a5173ad80.js',
        ],
      },
    };
    return assets;
  }
}

module.exports = LayoutService;
