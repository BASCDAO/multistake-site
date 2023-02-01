import { ReceiptType } from '@cardinal/staking/dist/cjs/programs/stakePool'
import { PublicKey } from '@solana/web3.js'
import type { CSSProperties } from 'react'

import type { AirdropMetadata } from '../common/Airdrop'

export enum TokenStandard {
  // Fungible, can have more than 1
  Fungible = 1,
  // Non fungible are all unique
  NonFungible = 2,
  // No receipt
  None = 3,
}

export type Analytic = {
  metadata?: {
    key: string
    type: 'staked'
    totals?: {
      key: string
      value: number
    }[]
  }
}

export type StakePoolMetadata = {
  // Name of this stake pool used as an id. Should be in lower-case kebab-case since it is used in the URL as /{name}
  // https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Why-you-should-make-kebab-case-a-URL-naming-convention-best-practice
  name: string
  // Display name to be displayed in the header. Often the same as name but with capital letters and spaces
  displayName: string
  // Whether or not to show name in header, defaults false
  nameInHeader?: boolean
  // Publickey for this stake pool
  stakePoolAddress: PublicKey
  // Description for this stake pool
  description?: string
  // Default receipt type. Setting this will remove the option for the user to choose which receipt type to use
  receiptType?: ReceiptType
  // Default empty. Setting this will tell the UI to only show tokens of that standard. Supports fungible or non-fungible
  tokenStandard?: TokenStandard
  // Optional config to hide this pool from the main page
  hidden?: boolean
  // Optional config to disable finding this pool
  notFound?: boolean
  // Optional hostname to remap
  hostname?: string
  // Optional hide footer
  hideFooter?: boolean
  // Optional config to link redirect to page when you click on this pool
  redirect?: string
  // Hide allowed tokens style
  hideAllowedTokens?: boolean
  // styles to apply to the whole stake pool
  styles?: CSSProperties
  // Contrast homepage background
  contrastHomepageBkg?: boolean
  // Colors object to style the stake page
  colors?: {
    primary: string
    secondary: string
    accent?: string
    fontColor?: string
    fontColorSecondary?: string
    backgroundSecondary?: string
    fontColorTertiary?: string
  }
  // Disallow regions based on IP address
  disallowRegions?: { code: string; subdivision?: string }[]
  // If the logo should be displayed with paddding
  logoPadding?: boolean
  // Optional social links
  socialLinks?: []
  // Image url to be used as the icon in the pool selector and the header
  imageUrl?: string
  // Secondary image url to be used next to the icon in the pool selector and the header
  secondaryImageUrl?: string
  // Background image for pool
  backgroundImage?: string
  // Website url if specified will be navigated to when the image in the header is clicked
  websiteUrl?: string
  // Max staked is used to compute percentage of total staked
  maxStaked?: number
  // Links to show at the top right of the page
  links?: { text: string; value: string }[]
  // On devnet when you click the airdrop button on this page it will clone NFTs with this metadata and airdrop to the user. These will not contain verified creators
  airdrops?: AirdropMetadata[]
  // Analytics to show at the top of stake pool. supports trait based analytics and overall tokens data
  analytics?: Analytic[]
}

export const defaultSecondaryColor = 'rgba(29, 78, 216, 255)'

export const stakePoolMetadatas: StakePoolMetadata[] = [
  // {
  //   name: 'cardinal',
  //   displayName: 'Cardinal',
  //   stakePoolAddress: new PublicKey(
  //     'AxHiaxZeoDsyjD8Eyj5tQtrajkxYk5xebEK1QNQ1LSE7'
  //   ),
  //   imageUrl: '/logo-colored.png',
  //   colors: {
  //     primary: 'rgb(54,21,38,0.9)',
  //     secondary: 'rgb(157,120,138, 0.6)',
  //   },
  // },
  {
    name: 'BASC',
    displayName: 'Bored Ape Solana Club',
    nameInHeader: true,
    stakePoolAddress: new PublicKey(
      '6qfbKwV8Tu1RsUc7R4U6aXPsvRarUm4JhRyuihSueLvH'
    ),
    websiteUrl: 'https://bascdao.net/',
    receiptType: ReceiptType.Receipt,
    tokenStandard: TokenStandard.NonFungible,
    imageUrl:
      '/logos/basc_logo.png',
    maxStaked: 6002,
    links: [
      {
        text: 'Buy',
        value: 'https://magiceden.io/creators/basc',
      },
    ],
    colors: {
      primary: '#242a36',
      secondary: '#4f2a89',
      accent: '#b69b68',
      fontColor: '#e6e7e8',
    },
  },
  {
    name: 'ABDUCTEDxBASC',
    displayName: 'Abducted BASC',
    nameInHeader: true,
    stakePoolAddress: new PublicKey(
      'A3fzMcAvbU4sPfXJfahyjdt3fA5UrvxQZ1VYt32jodrD'
    ),
    websiteUrl: 'https://bascdao.net/',
    receiptType: ReceiptType.Original,
    tokenStandard: TokenStandard.NonFungible,
    imageUrl: '/logos/abducted.png',
    maxStaked: 1111,
    links: [
      {
        text: 'Buy',
        value: 'https://magiceden.io/creators/basc',
      },
    ],
    colors: {
      primary: '#000000',
      secondary: '#37b24a',
      accent: '#37b24a',
      fontColor: '#37b24a',
      fontColorSecondary: '#000000',
      backgroundSecondary: '#000000',
    },
  },
  {
    name: 'BASCxAI',
    displayName: 'BASC x AI DEGENS',
    stakePoolAddress: new PublicKey(
      '3NEDUE4qM2cfMJ3FEkuH4XSuRjfQJv3Fx2nEXw8DHKu4'
    ),
    websiteUrl: 'https://bascdao.net/',
    receiptType: ReceiptType.Original,
    tokenStandard: TokenStandard.NonFungible,
    imageUrl:
      '/logos/AI.png',
    maxStaked: 1111,
    links: [
      {
        text: 'Buy',
        value: 'https://magiceden.io/creators/basc',
      },
    ],
    colors: {
      primary: '#000000',
      secondary: '#4da1de',
      accent: '#2a393a',
      fontColor: '#FFFFFF',
    },
  },
  {
    name: 'BASCxSENSHI',
    displayName: 'BASC X SENSHI',
    stakePoolAddress: new PublicKey(
      '2bg1xs3SA6tYTCf1CgrJdeh8cf4o9MExUhvQ4xrDBN5Q'
    ),
    websiteUrl: 'https://bascdao.net/',
    receiptType: ReceiptType.Original,
    tokenStandard: TokenStandard.NonFungible,
    maxStaked: 1111,
    imageUrl: '/logos/bascxsenshi_logo.png',
    colors: {
      primary: '#4c0f00',
      secondary: '#aa6f03',
      accent: '#aa6f03',
      fontColor: '#FFFFFF',
    },
    links: [
      {
        text: 'Buy',
        value: 'https://magiceden.io/creators/basc',
      },
    ],
  },
  {
    name: 'Test1',
    displayName: 'Test1',
    description:
      'Train your Vandals to earn $VAULT. You can stake and unstake at any time. $VAULT is a a reward mechanism for Vandals holders to show to reward those who train the hardest.',
    stakePoolAddress: new PublicKey(
      '21RcbvnidKddSyNZewTXbZAPSH4AMKfSbySYntssstEG'
    ),
    websiteUrl: 'https://twitter.com/VandalCityCorp',
    imageUrl: '/logos/vandals.png',
    maxStaked: 10000,
    nameInHeader: true,
    tokenStandard: TokenStandard.NonFungible,
    hideAllowedTokens: true,
    hideFooter: true,
    links: [
      {
        text: 'Buy Now',
        value:
          'https://hyperspace.xyz/collection/H5yBW4TwrUqKqpJZ436UnL9YUDBdvn27gzs8WGNKSARE',
      },
    ],
    colors: {
      primary: '#0d0d0d',
      secondary: '#CCCCCC',
      fontColor: '#ffffff',
      accent: '#666666',
      fontColorSecondary: '#0d0d0d',
    },
  },
  {
    name: 'Test2',
    displayName: 'Test2',
    description:
      'Train your Vandals to earn $VAULT. You can stake and unstake at any time. $VAULT is a a reward mechanism for Vandals holders to show to reward those who train the hardest.',
    stakePoolAddress: new PublicKey(
      'BhCPygxWx1Q9CtAZUpRh1hFbPmCW5y7yKrnBftVxNvsG'
    ),
    websiteUrl: 'https://twitter.com/VandalCityCorp',
    imageUrl: '/logos/vandals.png',
    maxStaked: 1,
    nameInHeader: true,
    tokenStandard: TokenStandard.NonFungible,
    hideAllowedTokens: true,
    hideFooter: true,
    links: [
      {
        text: 'Buy Now',
        value:
          'https://hyperspace.xyz/collection/H5yBW4TwrUqKqpJZ436UnL9YUDBdvn27gzs8WGNKSARE',
      },
    ],
    colors: {
      primary: '#0d0d0d',
      secondary: '#CCCCCC',
      fontColor: '#ffffff',
      accent: '#666666',
      fontColorSecondary: '#0d0d0d',
    },
  },
]
