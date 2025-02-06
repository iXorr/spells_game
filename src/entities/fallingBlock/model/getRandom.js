// нужно добавить долбанный множитель для сложности

export function defineIsDiamond() {
  return Math.random() > 0.2
}

export function getDelay() {
  return Math.ceil(Math.random() * 5000)
}

export function getStyle() {
  const randomX = Math.ceil(Math.random() * 90)
  
  const animationDirection = Math.random() > 0.5 ? 'normal' : 'reverse'
  const animationDuration = Math.random() * 2 + 3.5

  const blockMinSize = 1
  const blockMaxSize = 2
  const blockSizing = Math.max(blockMinSize, blockMaxSize - (animationDuration - 2.5) * 0.8);

  return {
    '--left-offset': `${randomX}%`,
    '--animation-duration': animationDuration + 's',
    '--animation-direction': animationDirection,
    '--block-sizing': blockSizing
  }
}