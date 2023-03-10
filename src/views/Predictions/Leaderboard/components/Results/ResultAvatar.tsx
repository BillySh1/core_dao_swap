import { Box, Flex, FlexProps, Link, ProfileAvatar, SubMenu, SubMenuItem, Text, useModal } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useProfileForAddress } from 'state/profile/hooks'
import { PredictionUser } from 'state/types'
import styled from 'styled-components'
import { getCOREScanLink } from 'utils'
import truncateHash from 'utils/truncateHash'
import WalletStatsModal from '../WalletStatsModal'

interface ResultAvatarProps extends FlexProps {
  user: PredictionUser
}

const AvatarWrapper = styled(Box)`
  order: 2;
  margin-left: 8px;

  ${({ theme }) => theme.mediaQueries.lg} {
    order: 1;
    margin-left: 0;
    margin-right: 8px;
  }
`

const UsernameWrapper = styled(Box)`
  order: 1;

  ${({ theme }) => theme.mediaQueries.lg} {
    order: 2;
  }
`

const ResultAvatar: React.FC<ResultAvatarProps> = ({ user, ...props }) => {
  const { t } = useTranslation()
  const { profile } = useProfileForAddress(user.id)
  const [onPresentWalletStatsModal] = useModal(<WalletStatsModal account={user.id} />)

  return (
    <SubMenu
      component={
        <Flex alignItems="center" {...props}>
          <UsernameWrapper>
            <Text color="primary" fontWeight="bold">
              {profile?.username || truncateHash(user.id)}
            </Text>{' '}
          </UsernameWrapper>
          <AvatarWrapper
            width={['32px', null, null, null, null, '40px']}
            height={['32px', null, null, null, null, '40px']}
          >
            <ProfileAvatar src={profile?.nft?.image?.thumbnail} height={40} width={40} />
          </AvatarWrapper>
        </Flex>
      }
      options={{ placement: 'bottom-start' }}
    >
      <SubMenuItem onClick={onPresentWalletStatsModal}>{t('View Stats')}</SubMenuItem>
      <SubMenuItem as={Link} href={getCOREScanLink(user.id, 'address')} bold={false} color="text" external>
        {t('View on COREScan')}
      </SubMenuItem>
    </SubMenu>
  )
}

export default ResultAvatar
