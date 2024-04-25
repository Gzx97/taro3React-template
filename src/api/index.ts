import request from '../utils/request';

const baseUri = '/foundation';
// 获取工单列表
export async function getDemo(data: any) {
  return request.post('/demo/demo', { ...data });
}

export const accountSignIn = async (data: {
  account: string;
  password: string;
}) => {
  return request.post(`${baseUri}/account/sign-in/account`, data);
};
