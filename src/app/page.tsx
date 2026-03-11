// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/Card';
import CenterCard from '@/components/CenterCard';
import useWindowSize from '@/hooks/useWindowSize';

// 卡片数据源
const cardData = [
  {
    id: '1',
    title: `Hi,I'm jojo`,
    desktop: { top: '50%', left: '50%', width: 400, height: 300, x: -200, y: -150 },
    mobile: { width: '100%', height: 200 },
    isCenter: true,
  },
  {
    id: '2',
    title: '2',
    desktop: { top: '15%', left: '15%', width: 200, height: 250 },
    mobile: { width: '100%', height: 180 },
    isCenter: false,
  },
  {
    id: '3',
    title: '3',
    desktop: { top: '64%', left: '70%', width: 200, height: 250 },
    mobile: { width: '100%', height: 180 },
    isCenter: false,
  },
  {
    id: '4',
    title: '4',
    desktop: { top: '15%', left: '70%', width: 200, height: 250 },
    mobile: { width: '100%', height: 180 },
    isCenter: false,
  },
  {
    id: '5',
    title: '5',
    desktop: { top: '1%', left: '34%', width: 400, height: 150 },
    mobile: { width: '100%', height: 150 },
    isCenter: false,
  },
  {
    id: '6',
    title: '6',
    desktop: { top: '65%', left: '15%', width: 200, height: 250 },
    mobile: { width: '100%', height: 180 },
    isCenter: false,
  },
  {
    id: '7',
    title: '7',
    desktop: { top: '80%', left: '34%', width: 400, height: 150 },
    mobile: { width: '100%', height: 150 },
    isCenter: false,
  },
];


export default function Home() {
  const [isClientMounted, setIsClientMounted] = useState(false);
  const size = useWindowSize();

  // 标记客户端挂载
  useEffect(() => {
    setIsClientMounted(true);
  }, []);

  // 响应式判断
  const isMobile = isClientMounted ? size.width < 1024 : false;
  const isDesktop = isClientMounted ? size.width >= 1024 : true;

  // 加载态
  if (!isClientMounted) {
    return <div className="max-w-7xl mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
      <div 
        className={`
          w-full mx-auto
          ${isMobile ? 'flex flex-col gap-6' : 'relative h-[700px]'}
          mb-12 sm:mb-20
        `}
      >
        {cardData.map((card) => {
          // 根据屏幕尺寸选择配置
          const config = isDesktop ? card.desktop : card.mobile;
          
          return (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              config={config}
              isCenter={card.isCenter}
              isMobile={isMobile}
            >
              {/* 中心卡片注入自定义内容 */}
              {card.isCenter && <CenterCard isMobile={isMobile} />}
            </Card>
          );
        })}
      </div>
    </div>
  );
}


