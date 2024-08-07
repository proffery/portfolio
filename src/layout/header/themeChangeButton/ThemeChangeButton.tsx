import { useAppContext } from '../../../common/context/appContext'
import { Button } from '../../../components/button/Button.styled'
import { Icon } from '../../../components/icon/Icon'

type Props = {
  className?: string
}

export const ThemeChangeButton = ({ className }: Props) => {
  const { setTheme, theme } = useAppContext()

  const themeChangeHandler = () => {
    theme === 'light' ? setTheme?.('dark') : setTheme?.('light')
  }

  return (
    <Button
      aria-label={'Theme change button'}
      background={'transparent'}
      borderColor={'transparent'}
      className={className}
      hoverBackground={'none'}
      hoverShadow={'none'}
      minWidth={'0px'}
      onClick={themeChangeHandler}
    >
      <Icon
        height={'40px'}
        iconId={theme === 'light' ? 'moon' : 'sun'}
        viewBox={theme === 'light' ? '0 0 45 50' : '10 20 500 500'}
        width={'40px'}
      />
    </Button>
  )
}
