// ** Icon imports
import HomeIcon from 'src/icons/HomeIcon'
import TrendingIcon from 'src/icons/TrendingIcon';
import CollectionsIcon from 'src/icons/CollectionsIcon';
import DashboardIcon from 'src/icons/DashboardIcon';
import DealSniperIcon from 'src/icons/DealSniperIcon';
import BidBotIcon from 'src/icons/BidBotIcon';
import MintBotIcon from 'src/icons/MintBotIcon';
import WalletIcon from 'src/icons/WalletIcon';

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      icon: HomeIcon,
      path: '/home'
    },
    {
      title: 'Dashboard',
      icon: DashboardIcon,
      children: [
        {
          title: 'Whales',
          path: '/dashboard/whales'
        },
        {
          title: 'Collections',
          path: '/dashboard/collections'
        }
      ]
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
      icon: WalletIcon,
      path: '/wallet'
    }
  ]
}

export default navigation
