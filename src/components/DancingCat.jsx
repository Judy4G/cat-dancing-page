import { useState } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'
import './DancingCat.css'

function DancingCat() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [animationType, setAnimationType] = useState('dance')

  const getAnimationClass = () => {
    if (!isAnimating) return ''
    return `cat-${animationType}`
  }

  const handleAnimationChange = (type) => {
    setAnimationType(type)
  }

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  return (
    <div className="dancing-cat-container">
      <div className="cat-wrapper">
        <img
          src={catSvg}
          alt="Dancing Cat"
          className={`cat-image ${getAnimationClass()}`}
        />
      </div>

      <div className="controls">
        <button
          className={`control-btn ${isAnimating ? 'playing' : 'paused'}`}
          onClick={toggleAnimation}
        >
          {isAnimating ? '⏸️ Pause' : '▶️ Play'}
        </button>

        <div className="animation-types">
          <button
            className={`type-btn ${animationType === 'dance' ? 'active' : ''}`}
            onClick={() => handleAnimationChange('dance')}
          >
            Dance
          </button>
          <button
            className={`type-btn ${animationType === 'bounce' ? 'active' : ''}`}
            onClick={() => handleAnimationChange('bounce')}
          >
            Bounce
          </button>
          <button
            className={`type-btn ${animationType === 'wiggle' ? 'active' : ''}`}
            onClick={() => handleAnimationChange('wiggle')}
          >
            Wiggle
          </button>
          <button
            className={`type-btn ${animationType === 'spin' ? 'active' : ''}`}
            onClick={() => handleAnimationChange('spin')}
          >
            Spin
          </button>
          <button
            className={`type-btn ${animationType === 'pulse' ? 'active' : ''}`}
            onClick={() => handleAnimationChange('pulse')}
          >
            Pulse
          </button>
        </div>
      </div>
    </div>
  )
}

export default DancingCat
