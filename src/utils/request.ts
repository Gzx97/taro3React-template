import Taro from '@tarojs/taro';
import { HTTP_STATUS } from '../contants/enums';

/**
 * develop	开发版
 * trial	体验版
 * release	正式版
 */
export function getBaseUrl() {
  const {
    miniProgram: { envVersion },
  } = Taro.getAccountInfoSync();
  console.log('运行环境:', envVersion);
  return `http://`;
}
const showErrorToast = (msg: string) => {
  Taro.showToast({
    title: msg,
    icon: 'none',
  });
};

const customInterceptor = (chain: any) => {
  const requestParams = chain.requestParams;
  return chain.proceed(requestParams).then((res) => {
    if (res.statusCode !== HTTP_STATUS.SUCCESS) {
      showErrorToast('ERROR');
    }
    if (res.statusCode === HTTP_STATUS.SUCCESS) {
      // 没有登录或登录已失效
      if (res.data.status && res.data.status === -101) {
        // Taro.setStorageSync('open_id', '');
        // Taro.reLaunch({
        //   url: '/pages/login/index',
        // });
      }
      // 没有进行身份认证
      if (res.data.status && res.data.status === -106) {
        // Taro.navigateTo({ url: `/pages/basicInfo/index` });
      }
      return res.data;
    }
  });
};

// Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。
// const interceptors = [customInterceptor, Taro.interceptors.logInterceptor]
const interceptors = [customInterceptor];

const BASE_URL = getBaseUrl();

interceptors.forEach((i) => Taro.addInterceptor(i));

type IMethod =
  | 'OPTIONS'
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'TRACE'
  | 'CONNECT';

interface IResponseType {
  /** 响应的数据为文本 */
  text;
  /** 响应的数据为 ArrayBuffer */
  arraybuffer;
}

interface IOptionConfig {
  /** 请求的参数 */
  data?: object;
  /** 设置请求的 header，header 中不能设置 Referer。
   *
   * `content-type` 默认为 `application/json` */
  header?: object;
  /** 设置 H5 端请求响应超时时间
   * @default 2000
   */
  timeout?: number;
  /** 即将与请求一起发送的 URL 参数
   * 必须是一个无格式对象(plain object)或 URLSearchParams 对象
   */
  params?: object;
  /** 响应的数据类型 */
  responseType?: keyof IResponseType;
}

interface IConfig extends IOptionConfig {
  /** 开发者服务器接口地址 */
  url: string;
  /** HTTP 请求方法 */
  method: IMethod;
}

// interface IRes<T> {
//   code: number
//   data: T
//   message: string
// }
class Request {
  baseRequest<T = any>(config: IConfig) {
    const {
      url,
      data,
      method = 'GET',
      header,
      timeout = 10000,
      // responseType = 'text'
    } = config;
    const targetUrl = BASE_URL + url;
    // const auth = Taro.getStorageSync('auth')
    const option: Taro.request.Option<any, object> = {
      url: targetUrl,
      data,
      method,
      header: {
        'content-type': 'application/json;charset=UTF-8',
        // 'content-type': 'application/json', // 默认值
        ...header,
      },
      mode: 'cors',
      timeout,
    };
    return Taro.request(option).then((res) => {
      return res;
    }) as Promise<T>;
  }

  get<T = any>(url: string, opt: IOptionConfig = {}) {
    const method: IMethod = 'GET';
    if (opt.params && Object.keys(opt.params).length) {
      let q = '';
      const params = JSON.parse(JSON.stringify(opt.params));
      Object.keys(params).forEach((k: string) => {
        if (params[k] !== '') {
          q += `${k}=${params[k]}&`;
        }
      });
      q = q.slice(0, -1);
      url = url.includes('?') ? url + '&' + q : url + '?' + q;
    }
    delete opt['params'];
    const config = { url, method, ...opt };
    return this.baseRequest<T>(config);
  }

  post<T = any>(url: string, data: object = {}, opt: IOptionConfig = {}) {
    const method: IMethod = 'POST';
    const config = { url, data, method, ...opt };
    return this.baseRequest<T>(config);
  }

  put<T = any>(url: string, data: object = {}, opt: IOptionConfig = {}) {
    const method: IMethod = 'PUT';
    const config = { url, data, method, ...opt };
    return this.baseRequest<T>(config);
  }

  delete<T = any>(url: string, opt: IOptionConfig = {}) {
    const method: IMethod = 'DELETE';
    const config = { url, method, ...opt };
    return this.baseRequest<T>(config);
  }
}

export default new Request();
