import React, { useEffect } from 'react';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh,
} from '@tarojs/taro';
import { useRequest } from '@/src/hooks/useRequest';
import { accountSignIn } from '@/src/api';

const Mine: React.FC = () => {
  const { run: login, loading } = useRequest(
    (param) => accountSignIn({ ...param }),
    {
      onSuccess(data, params) {
        console.log(data);
      },
    },
  );
  // 可以使用所有的 React Hooks
  useEffect(() => {}, []);

  // 对应 onReady
  useReady(() => {});

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
  // 详情可查阅：【Hooks】
  usePullDownRefresh(() => {});

  return (
    <View>
      我的
      <AtButton
        loading={loading}
        onClick={() => {
          login({
            account: 'string',
            password: 'string',
          });
        }}
      >
        登录接口测试
      </AtButton>
    </View>
  );
};

export default Mine;
