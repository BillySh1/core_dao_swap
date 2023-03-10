import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'CoreDAOSwap',
  description:
    'CoreDAOSwap---DEX 2.0',
  image: '/hero.jpg',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | CoreDAOSwap`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | CoreDAOSwap`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | CoreDAOSwap`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | CoreDAOSwap`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | CoreDAOSwap`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | CoreDAOSwap`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | CoreDAOSwap`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | CoreDAOSwap`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | CoreDAOSwap`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | CoreDAOSwap`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | CoreDAOSwap`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | CoreDAOSwap`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | CoreDAOSwap`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | CoreDAOSwap`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | CoreDAOSwap`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | CoreDAOSwap`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | CoreDAOSwap`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | CoreDAOSwap`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | CoreDAOSwap Info & Analytics`,
        description: 'View statistics for CoreDAOSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | CoreDAOSwap Info & Analytics`,
        description: 'View statistics for CoreDAOSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | CoreDAOSwap Info & Analytics`,
        description: 'View statistics for CoreDAOSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | CoreDAOSwap`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | CoreDAOSwap`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | CoreDAOSwap`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | CoreDAOSwap`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | CoreDAOSwap`,
      }
    default:
      return null
  }
}
