// @ts-ignore
/* eslint-disable */
import { request } from 'umi';


let GATEWAY = API_URL;

export default class Model {
  composeFullUrl(url) {
    let fullPath = GATEWAY + url;
    console.log("current url is ---->" + fullPath);
    return fullPath;
  }
  async fetch_get(url, options) {
    return request(this.composeFullUrl(url), {
      method: 'GET',
      ...(options || {}),
    });
  }
  async raw_get(url, options) {
    return request(url, {
      method: 'GET',
      ...(options || {}),
    });
  }
  async fetch_post(url, body, options) {
    let params = { params: body };
    return request(this.composeFullUrl(url), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: params,
      ...(options || {}),
    });
  }

}
