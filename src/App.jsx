import NoticeIcon from '@/icons/NoticeIcon'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

function App() {
  const [open, setOpen] = useState(false)
  const [layer, setLayer] = useState(false)
  const [done, setDone] = useState(false)
  const { innerWidth: width, innerHeight: height } = useWindowSize()
  return (
    <div className="flex min-h-screen flex-col relative justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: [.36, .66, .04, 1] }}
        onAnimationComplete={() => setOpen(true)}
        className="text-center leading-relaxed transform -translate-y-1/4">
        <div className="max-w-[200px] w-[52%] mx-auto mb-4">
          <NoticeIcon />
        </div>
        <p className="text-lg text-[#222]">打开通知</p>
        <p className="text-lg text-[#888]">我们会帮你推送一些你需要知道的事情。</p>
      </motion.div>
      {
        layer && (
          <motion.div
            layoutId="layer"
            onLayoutAnimationComplete={() => setDone(true)}
            className="flex justify-center items-center font-bold text-3xl fixed z-10 left-0 right-0 top-0 bottom-0 bg-[#FEC72E]">
            <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ease: [.36, .66, .04, 1], delay: .4 }} >太棒了！你成功了！</motion.h1>
            {
              done && <Confetti width={width} height={height} />
            }
          </motion.div>
        )
      }
      <AnimatePresence>
        {open && <motion.menu
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
        </motion.menu>}
      </AnimatePresence>
    </div>
  )
}

export default App
