// @ts-ignore
/* eslint-disable */
import Model from './model';

let bizPath = '/common-service/imagetext';
const composeUrl = (url) => {
  return bizPath + url;
};
export default class DefaultModel {
  //*********************************API for Category Section ************************************/
  static async removeBatch(params, options) {
    return await new Model().fetch_post('/common-service/imagetext/removeBatch', params, options);
  }
  static async removeById(params, options) {
    return await new Model().fetch_post('/common-service/imagetext/removeById', params, options);
  }
  static async update(params, options) {
    return await new Model().fetch_post('/common-service/imagetext/udpate', params, options);
  }
  static async addNew(params, options) {
    return await new Model().fetch_post('/common-service/imagetext/addNew', params, options);
  }
  static async queryAll(options) {
    return await new Model().fetch_get('/common-service/imagetext/queryAll', {}, options);
  }
  static async queryByParams(params, options) {
    return await new Model().fetch_get('/common-service/imagetext/queryAll', params, options);
  }
}
