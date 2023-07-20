// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FolderMultipleImage from 'mdi-material-ui/FolderMultipleImage'
import ViewGridOutline from 'mdi-material-ui/ViewGridOutline';
import AccountCircle from 'mdi-material-ui/AccountCircle';
import Wallet from 'mdi-material-ui/Wallet';
import TrendingIcon from 'src/icons/TrendingIcon';
import DealSniperIcon from 'src/icons/DealSniperIcon';
import BidBotIcon from 'src/icons/BidBotIcon';
import MintBotIcon from 'src/icons/MintBotIcon';
import CloseIcon from 'src/icons/CloseIcon';

// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => [
  {
    title: 'Home',
    icon: HomeOutline,
    path: '/home'
  },
  {
    title: 'Dashboard',
    icon: ViewGridOutline,
    path: '/dashboard'
  },
  {
    title: 'Collections',
    icon: FolderMultipleImage,
    path: '/collections'
  },
  {
    title: 'Trending',
    icon: TrendingIcon,
    path: '/trending'
  },
  {
    title: 'Deal Sniper',
    icon: DealSniperIcon,
    path: '/deal-sniper'
  },
  {
    title: 'Bid Bot',
    icon: BidBotIcon,
    path: '/bid-bot'
  },
  {
    title: 'Mint Bot',
    icon: MintBotIcon,
    path: '/mint-bot'
  },
  {
    title: 'Wallet',
    icon: Wallet,
    path: '/wallet'
  },
  {
    title: 'Profile',
    icon: AccountCircle,
    path: '/profile'
  },
  {
    title: 'Close',
    icon: CloseIcon,
    path: '/close'
  }
]

export default navigation
