export function defineIsDiamond() {
  return Math.random() > 0.2
}

export function getStyleVars() {
  let randomX = Math.random() * 90
  let animationDirection = Math.random() > 0.5 ? 'normal' : 'reverse'
  let animationDuration = Math.random() * 2 + 3.5
  let animationDelay = Math.random() * 5

  const blockMinSize = 1
  const blockMaxSize = 2
  let blockSizing = Math.max(blockMinSize, blockMaxSize - (animationDuration - 2.5) * 0.8);

  return {
    '--left-offset': randomX + '%',
    '--animation-direction': animationDirection,
    '--animation-delay': animationDelay + 's',
    '--animation-duration': animationDuration + 's',
    '--block-sizing': blockSizing
  }
}

// export function getDynamicStyle() {
//   let randomX = Math.ceil(Math.random() * 90)  
//   let animationDirection = Math.random() > 0.5 ? 'normal' : 'reverse'

//   return {
//     '--left-offset': randomX + '%',
//     '--animation-direction': animationDirection,
//   }
// }

// export function getStaticStyle() {
//   let animationDuration = Math.random() * 2 + 3.5
//   let animationDelay = Math.ceil(Math.random() * 5)  

//   const blockMinSize = 1
//   const blockMaxSize = 2
//   let blockSizing = Math.max(blockMinSize, blockMaxSize - (animationDuration - 2.5) * 0.8);

//   return {
//     '--animation-delay': animationDelay + 's',
//     '--animation-duration': animationDuration + 's',
//     '--block-sizing': blockSizing
//   }
// }