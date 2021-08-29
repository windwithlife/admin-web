// @ts-ignore
/* eslint-disable */
import Model from './model';

let bizPath = '/common-service/pagemodule';
const composeUrl = (url) => {
  return bizPath + url;
};
export default class DefaultModel {
  //*********************************API for Category Section ************************************/
  static async removeBatch(params, options) {
    return await new Model().fetch_post('/common-service/pagemodule/removeBatch', params, options);
  }
  static async removeById(params, options) {
    return await new Model().fetch_post('/common-service/pagemodule/removeById', params, options);
  }
  static async update(params, options) {
    return await new Model().fetch_post('/common-service/pagemodule/udpate', params, options);
  }
  static async addNew(params, options) {
    return await new Model().fetch_post('/common-service/pagemodule/addNew', params, options);
  }
  static async queryAll(options) {
    return await new Model().fetch_get('/common-service/pagemodule/queryAll', {}, options);
  }
  static async queryByParams(params, options) {
    return await new Model().fetch_get('/common-service/pagemodule/queryAll', params, options);
  }
}
