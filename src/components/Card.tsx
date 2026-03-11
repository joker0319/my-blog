// components/Card.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// 定义卡片配置类型
export type CardConfig = {
  width: number | string;
  height: number;
  top?: string;
  left?: string;
  x?: number;
  y?: number;
};

// 通用卡片 props 类型
type CardProps = {
  id: string;
  title: string;
  config: CardConfig;
  isCenter: boolean;
  isMobile: boolean;
  children?: React.ReactNode; // 支持自定义内容（中心卡片用）
};

const Card = ({ id, title, config, isCenter, isMobile, children }: CardProps) => {
  // 动态 key 确保响应式重渲染
  const cardKey = isMobile ? `mobile-${id}` : `desktop-${id}`;
  
  // 基础样式
  const baseStyle = {
    position: isMobile ? ('relative' as const) : ('absolute' as const),
    width: isMobile ? config.width : `${config.width}px`,
    height: `${config.height}px`,
    zIndex: isCenter ? 10 : 5,
    ...(isMobile ? {} : { top: config.top, left: config.left }),
  };

  // 初始/动画配置
  const initial = isMobile
    ? { opacity: 0, y: 20 }
    : isCenter
      ? { x: config.x, y: config.y, opacity: 0, scale: 0.9 }
      : { opacity: 0, scale: 0.9 };

  const animate = isMobile
    ? { opacity: 1, y: 0 }
    : isCenter
      ? { x: config.x, y: config.y, opacity: 1, scale: 1 }
      : { opacity: 1, scale: 1 };

  return (
    <motion.div
      key={cardKey}
      style={baseStyle}
      initial={initial}
      animate={animate}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
      }}
      transition={{ duration: 0.5, delay: Number(id) * 0.05 }}
      className={isMobile ? 'mx-auto' : ''}
    >
      <Link href="/about">
        <div className={`
          w-full h-full rounded-3xl p-6 shadow-md flex 
          flex-col justify-center items-center
          transition-all duration-300 cursor-pointer 
        `}>
          {/* 优先显示自定义内容（中心卡片），否则显示默认标题 */}
          {children || <div className="text-2xl sm:text-3xl">{title}</div>}
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;