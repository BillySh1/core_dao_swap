import type { Signer } from '@ethersproject/abstract-signer'
import { Contract } from '@ethersproject/contracts'
import type { Provider } from '@ethersproject/providers'
import poolsConfig from 'config/constants/pools'
import tokens from 'config/constants/tokens'
import { PoolCategory } from 'config/constants/types'
import { simpleRpcProvider } from 'utils/providers'

// Addresses
import {
    getAddress, getAnniversaryAchievement, getBunnyFactoryAddress,
    getBunnySpecialAddress, getBunnySpecialCakeVaultAddress, getBunnySpecialLotteryAddress, getBunnySpecialPredictionAddress, getBunnySpecialXmasAddress, getCakeVaultAddress, getChainlinkOracleAddress, getClaimRefundAddress, getDonate2Address, getDonateAddress, getDonateETHFAddress, getDonateRMAddress, getEasterNftAddress, getFactoryAddress, getFarmAuctionAddress, getFDAOClaimAddress, getFivePlusTwoAddress, getGalaxyNFTClaimingAddress, getLotteryV2Address,
    getMasterChefAddress,
    getMasterChefV1Address, getMulticallAddress, getNftMarketAddress,
    getNftSaleAddress, getPancakeBunniesAddress, getPancakeProfileAddress, getPancakeSquadAddress, getPointCenterIfoAddress, getPredictionsAddress, getTimeLockerAddress, getTradingCompetitionAddress, getTradingCompetitionAddressMobox, getTradingCompetitionAddressV2, getWLDonateFAddress, getXENAddress
} from 'utils/addressHelpers'

// ABI
import anniversaryAchievementAbi from 'config/abi/anniversaryAchievement.json'
import bunnyFactoryAbi from 'config/abi/bunnyFactory.json'
import bunnySpecialAbi from 'config/abi/bunnySpecial.json'
import bunnySpecialCakeVaultAbi from 'config/abi/bunnySpecialCakeVault.json'
import bunnySpecialLotteryAbi from 'config/abi/bunnySpecialLottery.json'
import bunnySpecialPredictionAbi from 'config/abi/bunnySpecialPrediction.json'
import bunnySpecialXmasAbi from 'config/abi/bunnySpecialXmas.json'
import cakeAbi from 'config/abi/cake.json'
import cakeVaultV2Abi from 'config/abi/cakeVaultV2.json'
import chainlinkOracleAbi from 'config/abi/chainlinkOracle.json'
import claimRefundAbi from 'config/abi/claimRefund.json'
import donateAbi from 'config/abi/donate.json'
import easterNftAbi from 'config/abi/easterNft.json'
import bep20Abi from 'config/abi/erc20.json'
import erc721Abi from 'config/abi/erc721.json'
import erc721CollectionAbi from 'config/abi/erc721collection.json'
import factoryAbi from 'config/abi/Factory.json'
import farmAuctionAbi from 'config/abi/farmAuction.json'
import fdaoclaimAbi from 'config/abi/fdaoclaim.json'
import fivePlusTwoAbi from 'config/abi/FivePlusTwo.json'
import galaxyNFTClaimingAbi from 'config/abi/galaxyNFTClaiming.json'
import ifoV1Abi from 'config/abi/ifoV1.json'
import ifoV2Abi from 'config/abi/ifoV2.json'
import lotteryV2Abi from 'config/abi/lotteryV2.json'
import lpTokenAbi from 'config/abi/lpToken.json'
import masterChef from 'config/abi/masterchef.json'
import masterChefV1 from 'config/abi/masterchefV1.json'
import MultiCallAbi from 'config/abi/Multicall.json'
import nftMarketAbi from 'config/abi/nftMarket.json'
import nftSaleAbi from 'config/abi/nftSale.json'
import pancakeBunniesAbi from 'config/abi/pancakeBunnies.json'
import profileABI from 'config/abi/pancakeProfile.json'
import pancakeSquadAbi from 'config/abi/pancakeSquad.json'
import pointCenterIfo from 'config/abi/pointCenterIfo.json'
import predictionsAbi from 'config/abi/predictions.json'
import sousChef from 'config/abi/sousChef.json'
import sousChefBnb from 'config/abi/sousChefBnb.json'
import sousChefV2 from 'config/abi/sousChefV2.json'
import timeLockerAbi from 'config/abi/TokenLocker.json'
import tradingCompetitionAbi from 'config/abi/tradingCompetition.json'
import tradingCompetitionMoboxAbi from 'config/abi/tradingCompetitionMobox.json'
import tradingCompetitionV2Abi from 'config/abi/tradingCompetitionV2.json'
import wlDonateAbi from 'config/abi/wlDonate.json'
import xenAbi from 'config/abi/xen.json'

// Types
import type {
    FarmAuction,
    Predictions
} from 'config/abi/types'

export const getContract = (abi: any, address: string, signer?: Signer | Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new Contract(address, abi, signerOrProvider as any)
}

export const getBep20Contract = (address: string, signer?: Signer | Provider) => {
  return getContract(bep20Abi, address, signer) as any
}
export const getErc721Contract = (address: string, signer?: Signer | Provider) => {
  return getContract(erc721Abi, address, signer) as any
}
export const getLpContract = (address: string, signer?: Signer | Provider) => {
  return getContract(lpTokenAbi, address, signer) as any
}
export const getIfoV1Contract = (address: string, signer?: Signer | Provider) => {
  return getContract(ifoV1Abi, address, signer) as any
}
export const getIfoV2Contract = (address: string, signer?: Signer | Provider) => {
  return getContract(ifoV2Abi, address, signer) as any
}
export const getSouschefContract = (id: number, signer?: Signer | Provider) => {
  const config = poolsConfig.find((pool) => pool.sousId === id)
  const abi = config.poolCategory === PoolCategory.BINANCE ? sousChefBnb : sousChef
  return getContract(abi, getAddress(config.contractAddress), signer) as any
}
export const getSouschefV2Contract = (id: number, signer?: Signer | Provider) => {
  const config = poolsConfig.find((pool) => pool.sousId === id)
  return getContract(sousChefV2, getAddress(config.contractAddress), signer) as any
}

export const getPointCenterIfoContract = (signer?: Signer | Provider) => {
  return getContract(pointCenterIfo, getPointCenterIfoAddress(), signer) as any
}
export const getCakeContract = (signer?: Signer | Provider) => {
  return getContract(cakeAbi, tokens.cake.address, signer) as any
}
export const getCDAOContract = (signer?: Signer | Provider) => {
  return getContract(cakeAbi, tokens.CDAO.address, signer) as any
}
export const getProfileContract = (signer?: Signer | Provider) => {
  return getContract(profileABI, getPancakeProfileAddress(), signer) as any
}
export const getPancakeBunniesContract = (signer?: Signer | Provider) => {
  return getContract(pancakeBunniesAbi, getPancakeBunniesAddress(), signer) as any
}
export const getBunnyFactoryContract = (signer?: Signer | Provider) => {
  return getContract(bunnyFactoryAbi, getBunnyFactoryAddress(), signer) as any
}
export const getBunnySpecialContract = (signer?: Signer | Provider) => {
  return getContract(bunnySpecialAbi, getBunnySpecialAddress(), signer) as any
}
export const getLotteryV2Contract = (signer?: Signer | Provider) => {
  return getContract(lotteryV2Abi, getLotteryV2Address(), signer) as any
}
export const getMasterchefContract = (signer?: Signer | Provider) => {
  return getContract(masterChef, getMasterChefAddress(), signer) as any
}
export const getMasterchefV1Contract = (signer?: Signer | Provider) => {
  return getContract(masterChefV1, getMasterChefV1Address(), signer) as any
}
export const getClaimRefundContract = (signer?: Signer | Provider) => {
  return getContract(claimRefundAbi, getClaimRefundAddress(), signer) as any
}
export const getTradingCompetitionContract = (signer?: Signer | Provider) => {
  return getContract(tradingCompetitionAbi, getTradingCompetitionAddress(), signer) as any
}

export const getTradingCompetitionContractV2 = (signer?: Signer | Provider) => {
  return getContract(tradingCompetitionV2Abi, getTradingCompetitionAddressV2(), signer) as any
}
export const getTradingCompetitionContractMobox = (signer?: Signer | Provider) => {
  return getContract(tradingCompetitionMoboxAbi, getTradingCompetitionAddressMobox(), signer) as any
}

export const getEasterNftContract = (signer?: Signer | Provider) => {
  return getContract(easterNftAbi, getEasterNftAddress(), signer) as any
}
export const getCakeVaultV2Contract = (signer?: Signer | Provider) => {
  return getContract(cakeVaultV2Abi, getCakeVaultAddress(), signer) as any
}

export const getPredictionsContract = (signer?: Signer | Provider) => {
  return getContract(predictionsAbi, getPredictionsAddress(), signer) as unknown as Predictions
}

export const getChainlinkOracleContract = (signer?: Signer | Provider) => {
  return getContract(chainlinkOracleAbi, getChainlinkOracleAddress(), signer) as any
}
export const getMulticallContract = () => {
  return getContract(MultiCallAbi, getMulticallAddress(), simpleRpcProvider) as any
}
export const getBunnySpecialCakeVaultContract = (signer?: Signer | Provider) => {
  return getContract(bunnySpecialCakeVaultAbi, getBunnySpecialCakeVaultAddress(), signer) as any
}
export const getBunnySpecialPredictionContract = (signer?: Signer | Provider) => {
  return getContract(bunnySpecialPredictionAbi, getBunnySpecialPredictionAddress(), signer) as any
}
export const getBunnySpecialLotteryContract = (signer?: Signer | Provider) => {
  return getContract(bunnySpecialLotteryAbi, getBunnySpecialLotteryAddress(), signer) as any
}
export const getBunnySpecialXmasContract = (signer?: Signer | Provider) => {
  return getContract(bunnySpecialXmasAbi, getBunnySpecialXmasAddress(), signer)
}
export const getFarmAuctionContract = (signer?: Signer | Provider) => {
  return getContract(farmAuctionAbi, getFarmAuctionAddress(), signer) as unknown as FarmAuction
}
export const getAnniversaryAchievementContract = (signer?: Signer | Provider) => {
  return getContract(anniversaryAchievementAbi, getAnniversaryAchievement(), signer) as any
}
export const getGalaxyNTFClaimingContract = (signer?: Signer | Provider) => {
  return getContract(galaxyNFTClaimingAbi, getGalaxyNFTClaimingAddress(), signer) as any
}

export const getNftMarketContract = (signer?: Signer | Provider) => {
  return getContract(nftMarketAbi, getNftMarketAddress(), signer) as any
}
export const getNftSaleContract = (signer?: Signer | Provider) => {
  return getContract(nftSaleAbi, getNftSaleAddress(), signer) as any
}
export const getPancakeSquadContract = (signer?: Signer | Provider) => {
  return getContract(pancakeSquadAbi, getPancakeSquadAddress(), signer) as any
}
export const getErc721CollectionContract = (signer?: Signer | Provider, address?: string) => {
  return getContract(erc721CollectionAbi, address, signer) as any
}

export const getFactoryContract = (signer?: Signer | Provider) => {
  return getContract(factoryAbi, getFactoryAddress(), signer) as any
}
export const getTimeLockerContract = (signer?: Signer | Provider) => {
  return getContract(timeLockerAbi, getTimeLockerAddress(), signer) as any
}

export const getFivePlusTwoContract = (signer?: Signer | Provider) => {
  return getContract(fivePlusTwoAbi, getFivePlusTwoAddress(), signer) as any
}

export const getXenContract = (signer?: Signer | Provider) => {
  return getContract(xenAbi, getXENAddress(), signer) as any
}
export const getFDAOClaimContract = (signer?: Signer | Provider) => {
  return getContract(fdaoclaimAbi, getFDAOClaimAddress(), signer) as any
}

export const getDonateContract = (signer?: Signer | Provider) => {
  return getContract(donateAbi, getDonateAddress(), signer) as any
}


export const getDonate2Contract = (signer?: Signer | Provider) => {
  return getContract(donateAbi, getDonate2Address(), signer) as any
}

export const getDonateRMContract = (signer?: Signer | Provider) => {
  return getContract(donateAbi, getDonateRMAddress(), signer) as any
}

export const getDonateETHFContract = (signer?: Signer | Provider) => {
  return getContract(donateAbi, getDonateETHFAddress(), signer) as any
}



export const getWLDonateContract = (signer?: Signer | Provider) => {
  return getContract(wlDonateAbi, getWLDonateFAddress(), signer) as any
}


