import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const StyledNav = styled.div`
  margin-bottom: 40px;
`

function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
      <ButtonMenuItem id="swap-nav-link">{t('Swap')}</ButtonMenuItem>
      <ButtonMenuItem id="pool-nav-link" onClickCapture={() => router.push('liquidity')}>
        {t('Liquidity')}
      </ButtonMenuItem>
      <ButtonMenuItem id="bridge-nav-link" as="a" href="/" target={'_blank'}>
        {t('Bridge')}
      </ButtonMenuItem>
    </ButtonMenu>
  )
}

export default Nav
