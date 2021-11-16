import NoticeIcon from '@/icons/NoticeIcon'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

function App() {
  return (
    <div className="flex min-h-screen flex-col relative justify-center overflow-hidden">
      <div className="text-center leading-relaxed transform -translate-y-1/4">
        <div className="max-w-[200px] w-[52%] mx-auto mb-4">
          <NoticeIcon />
        </div>
        <p className="text-lg text-[#222]">打开通知</p>
        <p className="text-lg text-[#888]">我们会帮你推送一些你需要知道的事情。</p>
      </div>
      <motion.menu
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        exit={{ y: '100%' }}
        transition={{ delay: .3, ease: [.36, .66, .04, 1] }}
        className="absolute space-y-1 left-0 right-0 bg-white shadow-2xl m-0 bottom-0 p-6 text-center">
        <motion.button
          layoutId="layer"
          onClick={() => setLayer(true)}
          className="block select-none text-lg transition-transform transform active:scale-[.99] py-3 text-white bg-[#FEC72E] w-full rounded-full">开启通知</motion.button>
        <button
          onClick={() => setOpen(false)}
          className="block select-none text-lg transition-transform transform active:scale-[.99] py-3 text-[#FEC72E] w-full">以后再说</button>
      </motion.menu>
    </div>
  )
}

export default App
