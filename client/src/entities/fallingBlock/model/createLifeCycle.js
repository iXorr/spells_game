import { ref } from 'vue'
import { defineIsDiamond, getStyleVars } from './getRandom'
import { changeScoreOnClick, changeScoreOnFall } from './scoreActions'

export function createLifeCycle() {
  const isCurrentDiamond = ref(defineIsDiamond())
  const currentStyleVars = ref(getStyleVars())
  const isClickable = ref(true)
  const motionClasses = ref('falling-block--animated')

  const updateBlock = () => {
    motionClasses.value = null
    isCurrentDiamond.value = defineIsDiamond()
    currentStyleVars.value = getStyleVars()
    isClickable.value = true

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
    if (!isClickable.value)
      return

    isClickable.value = false

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