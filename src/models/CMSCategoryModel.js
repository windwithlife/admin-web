// @ts-ignore
/* eslint-disable */
import Model from './model';

let bizPath = '/common-service/category';
const composeUrl = (url) => {
  return bizPath + url;
};
export default class DefaultModel {
  //*********************************API for Category Section ************************************/
  static async removeBatch(params, options) {
    return await new Model().fetch_post('/common-service/category/removeBatch', params, options);
  }
  static async removeById(params, options) {
    return await new Model().fetch_post('/common-service/category/removeById', params, options);
  }
  static async update(params, options) {
    return await new Model().fetch_post('/common-service/category/update', params, options);
  }
  static async addNew(params, options) {
    return await new Model().fetch_post('/common-service/category/addNew', params, options);
  }
  static async queryAll(options) {
    return await new Model().fetch_get('/common-service/category/queryAll', {}, options);
  }
  static async queryByParams(params, options) {
    return await new Model().fetch_get('/common-service/category/queryAll', params, options);
  }
}
