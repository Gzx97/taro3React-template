export enum HTTP_STATUS {
  SUCCESS = 200,
  CREATED = 201,
  ACCEPTED = 202,
  CLIENT_ERROR = 400,
  AUTHENTICATE = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  // 自定义登录态过期（后期扩展 refreshLogin）
  AUTH_EXPIRED = 10000,
}

// export enum SHARE {
//   SHARE_PATH = 'pages/journalism/index',
//   SHARE_Title = '黑门碳汇',
//   SHARE_URL = 'https://oss.bgquote.com/m4dfaq/1663902391.jpg',
// }
