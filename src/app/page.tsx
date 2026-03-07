'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const cardData = [
  {
    id: '1',
    title: '1',
    position: {
      top: '50%',
      left: '50%',
      width: 350,
      height: 250,
    },
    isCenter: true,
  },
  {
    id: '2',
    title: '2',
    position: {
      top: '10%',
      left: '15%',
      width: 200,
      height: 250,
    },
    isCenter: false,
  },
  {
    id: '3',
    title: '3',
    position: {
      top: '70%',
      left: '70%',
      width: 200,
      height: 200,
    },
    isCenter: false,
  },
  {
    id: '4',
    title: '4',
    position: {
      top: '15%',
      left: '70%',
      width: 180,
      height: 220,
    },
    isCenter: false,
  },
   {
    id: '5',
    title: '5',
    position: {
      top: '1%',
      left: '38%',
      width: 350,
      height: 130,
    },
    isCenter: false,
  },
  {
    id: '6',
    title: '6',
    position: {
      top: '65%',
      left: '15%',
      width: 200,
      height: 200,
    },
    isCenter: false,
  },
  {
    id: '7',
    title: '7',
    position: {
      top: '80%',
      left: '40%',
      width: 300,
      height: 150,
    },
    isCenter: false,
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Hi,I'm jojo</h1>
      {/* 父容器必须 relative + 高度 */}
      <div className="relative w-full h-[600px] mb-20">
        {cardData.map((card) => (
          <motion.div
            key={card.id}

            style={{
              position: 'absolute',
              top: card.position.top,
              left: card.position.left,
              width: card.position.width + 'px',
              height: card.position.height + 'px',
              zIndex: card.isCenter ? 10 : 5,
            }}

            // ✅ 关键：所有 transform 必须写在这里！！！
            initial={
              card.isCenter
                ? { x: -150, y: -125,opacity: 0, scale: 0.9 }
                : { opacity: 0, scale: 0.9 }
            }
            animate={
              card.isCenter
                ? { x: -150, y: -125, opacity: 1, scale: 1 }
                : { opacity: 1, scale: 1 }
            }
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/about">
              <div className="w-full h-full bg-white/90 rounded-xl p-6 shadow-md flex items-center justify-center text-3xl">
                {card.title}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}