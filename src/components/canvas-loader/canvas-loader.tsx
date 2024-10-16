import { Html, useProgress } from '@react-three/drei'
import clsx from 'clsx'

import s from './canvas-loader.module.scss'

export const CanvasLoader = () => {
  const classNames = {
    loader: clsx(s.loader),
  }

  const { progress } = useProgress()

  return (
    <Html as={'div'} className={classNames.loader}>
      <div>{progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}</div>
    </Html>
  )
}
