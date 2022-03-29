import React from 'react'
import darkModeIcon from '../../assets/icons/darkmode.svg'
import Icon, {HarmonyIcon, HorizonIcon} from "../Icon";
import {useStores} from "../../use-stores";
import {Box, Button, DropButton} from "grommet";
import {observer} from "mobx-react";
import {breakpoints} from "../../utils";
import {useMediaQuery} from "react-responsive";

const AccountButton = observer(() => {
    const { walletStore } = useStores()
    const { lastUsedAddress } = walletStore
    const onDisconnectClicked = () => {
        walletStore.disconnectWallet()
    }
    const address = `${lastUsedAddress.substr(0, 8)}...`
    return <DropButton
      label={address}
      dropAlign={{ top: 'bottom', right: 'right' }}
      dropContent={
          <Box pad="medium" background={"modalBackground"}>
              <Button primary color={'buttonBackground'} label={'Disconnect'} onClick={onDisconnectClicked} />
          </Box>
      }
    />
})

const AppHeader = observer(() => {
    const { configStore, walletStore } = useStores()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 960px)' })

    const toggleTheme = () => {
        configStore.setThemeMode(configStore.themeMode === 'dark' ? 'light' : 'dark')
    }

    const onConnectClicked = async () => {
        await walletStore.connectWallet()
    }

    return <Box
      tag='header'
      align='center'
      border={{ side: 'bottom', color: 'border', size: '1px' }}
      pad={'26px 0 12px 0'}
    >
        <Box
          direction={'row'}
          gap={'16px'}
          // pad={'0 24px 0 24px'}
          align='center'
          justify='between'
          width={{ width: '100%', max: breakpoints.desktop }}
        >
            <Box direction={'row'} gap={'28px'}>
                <HarmonyIcon width={'30px'} />
                {!isTabletOrMobile && <HorizonIcon />}
            </Box>
            <Box direction={'row'} gap={'32px'}>
                <Icon src={darkModeIcon} onClick={toggleTheme} />
                {walletStore.lastUsedAddress &&
                  <AccountButton />
                }
                {!walletStore.lastUsedAddress &&
                  <Button primary color={'buttonBackground'} label={'Connect to a wallet'} onClick={onConnectClicked} />
                }
            </Box>
        </Box>
    </Box>
})

export default AppHeader
