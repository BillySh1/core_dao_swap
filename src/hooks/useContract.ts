import { Cake, CakeVaultV2, Erc721collection } from 'config/abi/types'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useMemo } from 'react'
import { getMulticallAddress } from 'utils/addressHelpers'
import {
    getAnniversaryAchievementContract, getBep20Contract, getBunnyFactoryContract, getBunnySpecialCakeVaultContract, getBunnySpecialContract, getBunnySpecialLotteryContract, getBunnySpecialPredictionContract, getBunnySpecialXmasContract, getCakeContract, getCakeVaultV2Contract, getCDAOContract, getChainlinkOracleContract, getClaimRefundContract, getDonate2Contract, getDonateContract, getDonateETHFContract, getDonateRMContract, getEasterNftContract, getErc721CollectionContract, getErc721Contract, getFactoryContract, getFarmAuctionContract, getFDAOClaimContract, getFivePlusTwoContract, getGalaxyNTFClaimingContract, getIfoV1Contract,
    getIfoV2Contract, getLotteryV2Contract, getMasterchefContract,
    getMasterchefV1Contract, getNftMarketContract,
    getNftSaleContract, getPancakeBunniesContract, getPancakeSquadContract, getPointCenterIfoContract, getPredictionsContract, getProfileContract, getSouschefContract, getTimeLockerContract, getTradingCompetitionContract, getTradingCompetitionContractMobox, getTradingCompetitionContractV2, getWLDonateContract, getXenContract
} from 'utils/contractHelpers'

// Imports below migrated from Exchange useContract.ts
import { Contract } from '@ethersproject/contracts'
import { WETH } from '@pancakeswap/sdk'
import { ERC20_BYTES32_ABI } from '../config/abi/erc20'
import ERC20_ABI from '../config/abi/erc20.json'
import IPancakePairABI from '../config/abi/IPancakePair.json'
import multiCallAbi from '../config/abi/Multicall.json'
import WETH_ABI from '../config/abi/weth.json'
import { getContract, getProviderOrSigner } from '../utils'

import { IPancakePair } from '../config/abi/types/IPancakePair'

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useIfoV1Contract = (address: string) => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getIfoV1Contract(address, library.getSigner()), [address, library])
}

export const useIfoV2Contract = (address: string) => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getIfoV2Contract(address, library.getSigner()), [address, library])
}

export const useERC20 = (address: string, withSignerIfPossible = true) => {
  const { library, account } = useActiveWeb3React()
  const signer = useMemo(
    () => (withSignerIfPossible ? getProviderOrSigner(library, account) : null),
    [withSignerIfPossible, library, account],
  )
  return useMemo(() => getBep20Contract(address, signer), [address, signer])
}

/**
 * @see https://docs.openzeppelin.com/contracts/3.x/api/token/erc721
 */
export const useERC721 = (address: string, withSignerIfPossible = true) => {
  const { account, library } = useActiveWeb3React()
  const signer = useMemo(
    () => (withSignerIfPossible ? getProviderOrSigner(library, account) : null),
    [withSignerIfPossible, library, account],
  )
  return useMemo(() => getErc721Contract(address, signer), [address, signer])
}

export const useCake = (): { reader: Cake; signer: Cake } => {
  const { account, library } = useActiveWeb3React()
  return useMemo(
    () => ({
      reader: getCakeContract(null),
      signer: getCakeContract(getProviderOrSigner(library, account)),
    }),
    [account, library],
  )
}

export const useCDAO = () => {
  const { account, library } = useActiveWeb3React()
  return useMemo(
    () => ({
      reader: getCDAOContract(null),
      signer: getCDAOContract(getProviderOrSigner(library, account)),
    }),
    [account, library],
  )
}

export const useBunnyFactory = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBunnyFactoryContract(library.getSigner()), [library])
}

export const usePancakeBunnies = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getPancakeBunniesContract(library.getSigner()), [library])
}

export const useProfileContract = (withSignerIfPossible = true) => {
  const { library, account } = useActiveWeb3React()
  const signer = useMemo(
    () => (withSignerIfPossible ? getProviderOrSigner(library, account) : null),
    [withSignerIfPossible, library, account],
  )
  return useMemo(() => getProfileContract(signer), [signer])
}

export const useLotteryV2Contract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getLotteryV2Contract(library.getSigner()), [library])
}

export const useMasterchef = (withSignerIfPossible = true) => {
  const { library, account } = useActiveWeb3React()
  const signer = useMemo(
    () => (withSignerIfPossible ? getProviderOrSigner(library, account) : null),
    [withSignerIfPossible, library, account],
  )
  return useMemo(() => getMasterchefContract(signer), [signer])
}

export const useMasterchefV1 = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getMasterchefV1Contract(library.getSigner()), [library])
}

export const useSousChef = (id) => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getSouschefContract(id, library.getSigner()), [id, library])
}

export const usePointCenterIfoContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getPointCenterIfoContract(library.getSigner()), [library])
}

export const useBunnySpecialContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBunnySpecialContract(library.getSigner()), [library])
}

export const useClaimRefundContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getClaimRefundContract(library.getSigner()), [library])
}

export const useTradingCompetitionContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getTradingCompetitionContract(library.getSigner()), [library])
}

export const useTradingCompetitionContractV2 = (withSignerIfPossible = true) => {
  const { library, account } = useActiveWeb3React()
  const signer = useMemo(
    () => (withSignerIfPossible ? getProviderOrSigner(library, account) : null),
    [withSignerIfPossible, library, account],
  )
  return useMemo(() => getTradingCompetitionContractV2(signer), [signer])
}

export const useTradingCompetitionContractMobox = (withSignerIfPossible = true) => {
  const { library, account } = useActiveWeb3React()
  const signer = useMemo(
    () => (withSignerIfPossible ? getProviderOrSigner(library, account) : null),
    [withSignerIfPossible, library, account],
  )
  return useMemo(() => getTradingCompetitionContractMobox(signer), [signer])
}

export const useEasterNftContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getEasterNftContract(library.getSigner()), [library])
}

export const useVaultPoolContract = (): CakeVaultV2 => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getCakeVaultV2Contract(library.getSigner()), [library])
}

export const useCakeVaultContract = (withSignerIfPossible = true) => {
  const { library, account } = useActiveWeb3React()
  const signer = useMemo(
    () => (withSignerIfPossible ? getProviderOrSigner(library, account) : null),
    [withSignerIfPossible, library, account],
  )
  return useMemo(() => getCakeVaultV2Contract(signer), [signer])
}

export const usePredictionsContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getPredictionsContract(library.getSigner()), [library])
}

export const useChainlinkOracleContract = (withSignerIfPossible = true) => {
  const { library, account } = useActiveWeb3React()
  const signer = useMemo(
    () => (withSignerIfPossible ? getProviderOrSigner(library, account) : null),
    [withSignerIfPossible, library, account],
  )
  return useMemo(() => getChainlinkOracleContract(signer), [signer])
}

export const useSpecialBunnyCakeVaultContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBunnySpecialCakeVaultContract(library.getSigner()), [library])
}

export const useSpecialBunnyPredictionContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBunnySpecialPredictionContract(library.getSigner()), [library])
}

export const useBunnySpecialLotteryContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBunnySpecialLotteryContract(library.getSigner()), [library])
}

export const useBunnySpecialXmasContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBunnySpecialXmasContract(library.getSigner()), [library])
}

export const useAnniversaryAchievementContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getAnniversaryAchievementContract(library.getSigner()), [library])
}

export const useFactory = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getFactoryContract(library.getSigner()), [library])
}

export const useTimeLocker = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getTimeLockerContract(library.getSigner()), [library])
}
export const useFivePlusTwo = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getFivePlusTwoContract(library.getSigner()), [library])
}

export const useXen = ()=>{
  const { library } = useActiveWeb3React()
  return useMemo(() => getXenContract(library.getSigner()), [library])
}
export const useFDAOClaim = ()=>{
  const { library } = useActiveWeb3React()
  return useMemo(() => getFDAOClaimContract(library.getSigner()), [library])
}

export const useDonate = (type)=>{
  const { library } = useActiveWeb3React()
  return useMemo(() => getDonateContract(library.getSigner()), [library, type])
}
export const useDonate2 = (type)=>{
  const { library } = useActiveWeb3React()
  return useMemo(() => getDonate2Contract(library.getSigner()), [library, type])
} 
export const useDonateRM = (type)=>{
  const { library } = useActiveWeb3React()
  return useMemo(() => getDonateRMContract(library.getSigner()), [library, type])
} 
export const useDonateETHF = (type)=>{
  const { library } = useActiveWeb3React()
  return useMemo(() => getDonateETHFContract(library.getSigner()), [library, type])
} 

export const useWLDonate = ()=>{
  const { library } = useActiveWeb3React()
  return useMemo(() => getWLDonateContract(library.getSigner()), [library])
} 

export const useGalaxyNFTClaimingContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getGalaxyNTFClaimingContract(library.getSigner()), [library])
}

export const useNftSaleContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getNftSaleContract(library.getSigner()), [library])
}

export const usePancakeSquadContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getPancakeSquadContract(library.getSigner()), [library])
}

export const useFarmAuctionContract = (withSignerIfPossible = true) => {
  const { account, library } = useActiveWeb3React()
  const signer = useMemo(
    () => (withSignerIfPossible ? getProviderOrSigner(library, account) : null),
    [withSignerIfPossible, library, account],
  )
  return useMemo(() => getFarmAuctionContract(signer), [signer])
}

export const useNftMarketContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getNftMarketContract(library.getSigner()), [library])
}

export const useErc721CollectionContract = (
  collectionAddress: string,
): { reader: Erc721collection; signer: Erc721collection } => {
  const { library, account } = useActiveWeb3React()
  return useMemo(
    () => ({
      reader: getErc721CollectionContract(null, collectionAddress),
      signer: getErc721CollectionContract(getProviderOrSigner(library, account), collectionAddress),
    }),
    [account, library, collectionAddress],
  )
}

// Code below migrated from Exchange useContract.ts

// returns null on errors
function useContract<T extends Contract = Contract>(
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true,
): T | null {
  const { library, account } = useActiveWeb3React()
  const signer = useMemo(
    () => (withSignerIfPossible ? getProviderOrSigner(library, account) : null),
    [withSignerIfPossible, library, account],
  )

  const canReturnContract = useMemo(
    () => address && ABI && (withSignerIfPossible ? library : true),
    [address, ABI, library, withSignerIfPossible],
  )

  return useMemo(() => {
    if (!canReturnContract) return null
    try {
      return getContract(address, ABI, signer)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [address, ABI, signer, canReturnContract]) as T
}

export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean) {
  return useContract<Contract>(tokenAddress, ERC20_ABI, withSignerIfPossible)
}

export function useWBNBContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract<Contract>(chainId ? WETH[chainId].address : undefined, WETH_ABI, withSignerIfPossible)
}

export function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract<Contract>(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible)
}

export function usePairContract(pairAddress?: string, withSignerIfPossible?: boolean): IPancakePair | null {
  return useContract(pairAddress, IPancakePairABI, withSignerIfPossible) as any
}

export function useMulticallContract() {
  return useContract<Contract>(getMulticallAddress(), multiCallAbi, false)
}

