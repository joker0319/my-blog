// components/CenterCard.tsx
'use client';

import { useState, useEffect } from 'react';

// 获取时间问候语
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'Good morning';
  if (hour >= 12 && hour < 18) return 'Good afternoon';
  if (hour >= 18 && hour < 24) return 'Good evening';
  return 'Good night';
};

type CenterCardProps = {
  isMobile: boolean;
};

const CenterCard = ({ isMobile }: CenterCardProps) => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // 初始化问候语
    setGreeting(getGreeting());
    // 每分钟更新一次
    const timer = setInterval(() => setGreeting(getGreeting()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontFamily: 'CuteFont, Arial, Helvetica, sans-serif',fontWeight: 200,fontSize: '2rem'}} className="text-center font-averia mt-3 font-cute">
      <div className="mb-4 flex justify-center">
      <img 
        src="/avatar/jojo.jpg"
        alt="jojo" 
        className={`
          rounded-full
          object-cover 
          border-2 border-sky-100
          shadow-sm 
          ${isMobile ? 'w-18 h-18' : 'w-32 h-32'} 
        `}
      />
    </div>
      <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-medium `}>
        {greeting}
      </h2>
      <p className={`${isMobile ? 'text-2xl' : 'text-3xl'}  `}>
        I'm <span className="text-blue-300 text-4xl px-1">jojo</span>, nice to<br/> meet you!
      </p>
    </div>
  );
};

export default CenterCard;