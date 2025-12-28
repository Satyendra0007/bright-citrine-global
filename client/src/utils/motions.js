const fadeRight = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 }
}

const fadeUP = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 }
}

const fadeZoomUP = {
  hidden: { opacity: 0, y: 100, scale: 0 },
  show: { opacity: 1, y: 0, scale: 1 }
}

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

export { fadeRight, fadeUP, fadeZoomUP, stagger }