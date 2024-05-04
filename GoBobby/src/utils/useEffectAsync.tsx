import {useEffect} from 'react';

export type UseEffectAsyncType = () => Promise<() => void | void>;

export default async function useEffectAsync(
  callback: UseEffectAsyncType,
  deps: any[],
): Promise<void> {
  useEffect(() => {
    callback()
      .then(() => {})
      .catch(console.error);
  }, ...deps);
}
