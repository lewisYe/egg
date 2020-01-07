'use strict';

module.exports = {
  async renderTel(name, data) {
    const runtimeContext = this.runtimeContext || {};
    const assetId = runtimeContext.assetId || '';
    await this.render(name, data.assets[assetId]);
  },
};
