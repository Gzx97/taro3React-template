import { useCallback, useState } from 'react';

export type Service<TData, TParams extends any[]> = (
  ...args: TParams
) => Promise<TData>;

export interface Options<TData, TParams extends any[]> {
  // onBefore?: (params: TParams) => void;
  onSuccess?: (data: TData, params: TParams) => void;
  // formatResult?: (res: any) => TData;
  onFinally?: (params: TParams, data?: TData, e?: Error) => void;
  auto?: boolean;
}
// export const useRequest: <TData, TParams extends any[]>(
//   requestFn: Service<TData, TParams>,
//   options: Options<TData, TParams> = {}
// ) => void = (requestFn, options = {}) => {
//   // 函数体
// };
export function useRequest<TData, TParams extends any[]>(
  requestFn: Service<TData, TParams>,
  options: Options<TData, TParams> = { auto: false },
) {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<TData>();

  const [err, setErr] = useState();

  const run = useCallback(async (...params: TParams) => {
    setLoading(true);

    let res;

    try {
      res = await requestFn(...params);

      setData(res);
      // 调用 onSuccess 方法
      if (options.onSuccess) {
        options.onSuccess(res, params);
      }
    } catch (error) {
      setErr(error);
    }

    setLoading(false);

    return res;
  }, []);

  return {
    loading,

    data,

    err,

    run,
  };
}
