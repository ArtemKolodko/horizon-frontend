import { makeAutoObservable } from "mobx";
import Onboard from 'harmony-jenya-bnc-onboard'
import {WalletInitOptions} from 'harmony-jenya-bnc-onboard/dist/src/interfaces'

const networkId = 1666600000

export enum WALLETS {
  METAMASK = 'metamask',
  ONEWALLET = 'onewallet'
}

const LAST_USED_PROVIDER_KEY = 'LAST_USED_PROVIDER'

const wallets = [
  {walletName: WALLETS.METAMASK, preferred: true},
  {walletName: WALLETS.ONEWALLET, preferred: true},
]

export class WalletStore {
  private onboard: any
  web3: any
  providerName = ''
  lastUsedAddress = ''

  constructor() {
    makeAutoObservable(this)
    this.init()
  }

  setOnboard (onboard: any) {
    this.onboard = onboard
  }

  setWeb3 (web3: any) {
    this.web3 = web3
  }

  setProviderName (name: string) {
    this.providerName = name
  }

  connectWallet = async () => {
    const walletSelected = await this.onboard.walletSelect()
    if (walletSelected) {
      await this.onboard.walletCheck()
    }
  }

  disconnectWallet () {
    this.onboard.walletReset()
  }

  transactionDataCheck () {
    return async (stateAndHelpers: any) => {
      return null
    }
  }

  init () {
    const onboard = Onboard({
      networkId,
      // Is it mandatory for Ledger to work to send network name in lowercase
      networkName: 'harmony ' + networkId,
      subscriptions: {
        wallet: (wallet) => {
          console.log({wallet})
          if (wallet.provider) {
            this.setWeb3(wallet.provider)
            this.setProviderName(wallet.name as string)
          }
        },
        address: (address) => {
          if (!this.lastUsedAddress && address) {
            this.lastUsedAddress = address
            // store.dispatch(fetchProvider(providerName))
          }
          if (!address && this.lastUsedAddress) {
            this.lastUsedAddress = ''
            this.setProviderName('')
            // store.dispatch(removeProvider())
          }
        },
      },
      walletSelect: {
        description: 'Please select a wallet to connect to Horizon Bridge',
        wallets,
      },
      walletCheck: [
        { checkName: 'derivationPath' },
        { checkName: 'connect' },
        { checkName: 'accounts' },
        { checkName: 'network' },
        // @ts-ignore
        this.transactionDataCheck(),
      ],
    })

    this.setOnboard(onboard)
  }
}
