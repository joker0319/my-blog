//窗口尺寸钩子函数
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: typeof window !== 'undefined' ? document.documentElement.clientWidth : 1200,
    height: typeof window !== 'undefined' ? document.documentElement.clientHeight : 800,
  });
  const isMounted = useRef(false);

  // 防抖函数
  const debounce = useCallback((func: Function, delay: number) => {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }, []);

  // 更新尺寸方法
  const updateSize = useCallback(() => {
    if (typeof window !== 'undefined' && isMounted.current) {
      setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    }
  }, []);

  useEffect(() => {
    isMounted.current = true;
    
    // 监听窗口变化
    const handleResize = debounce(updateSize, 100);
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // 监听页面可见性
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        updateSize();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 清理监听
    return () => {
      isMounted.current = false;
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [debounce, updateSize]);

  // 初始更新
  useEffect(() => {
    if (isMounted.current) {
      setTimeout(updateSize, 100);
    }
  }, [updateSize]);

  return size;
};

export default useWindowSize;