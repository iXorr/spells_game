import { ref } from 'vue'
import { defineIsDiamond, getStyleVars } from './getRandom'
import { changeScoreOnClick, changeScoreOnFall } from './scoreActions'

export function createLifeCycle() {
  const isCurrentDiamond = ref(defineIsDiamond())
  const currentStyleVars = ref(getStyleVars())
  const motionClasses = ref('falling-block--animated')

  const updateBlock = () => {
    motionClasses.value = null
    isCurrentDiamond.value = defineIsDiamond()
    currentStyleVars.value = getStyleVars()

    setTimeout(() => {
      motionClasses.value = 'falling-block--animated'
    }, 250)
  }

  const checkFalling = (event) => {
    if (event.animationName.includes('falling')) {
      changeScoreOnFall(isCurrentDiamond.value)
      updateBlock()
    }
  }

  const checkClicking = () => {
    changeScoreOnClick(isCurrentDiamond.value)
    motionClasses.value += ' falling-block--looted'

    setTimeout(() => {
      updateBlock()
    }, 500)
  }

  return {
    isCurrentDiamond,
    currentStyleVars,
    motionClasses,
    checkFalling,
    checkClicking
  }
}