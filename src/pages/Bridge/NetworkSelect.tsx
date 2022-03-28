import {NetworkType, NetworkName} from "../../types";
import {EthIcon, HarmonyIcon, SwitchIcon} from "../../components/Icon";
import {Box, Text} from "grommet";
import React from "react";

export interface ITokenItemProps {
  title: string
  tokenType: NetworkType
}

export const TokenItem = (props: ITokenItemProps) => {
  const {title, tokenType} = props

  const icon = tokenType === NetworkType.ETH
    ? <EthIcon height={'32px'} />
    : <HarmonyIcon height={'32px'} />

  return <Box align={'center'} width={'360px'}>
    <Text margin={{ bottom: '8px' }} color={'secondary'}>{title}</Text>
    {icon}
    <Text margin={{ top: '8px' }} style={{ textTransform: 'uppercase' }}>{NetworkName[tokenType]}</Text>
  </Box>
}

export interface INetworkSelectProps {
  from: NetworkType
  to: NetworkType
  switchEnabled?: boolean
  onTokensSwitchClicked?: () => void;
}

export const NetworkSelect = (props: INetworkSelectProps) => {
  const { from, to, switchEnabled = true, onTokensSwitchClicked } = props
  return <Box
    direction={'row'}
    justify={'between'}
    align={'center'}
    pad={{ bottom: '36px' }}
    border={{ side: 'bottom', color: 'border', size: '1px' }}
  >
    <TokenItem title={'From'} tokenType={from} />
    <Box
      width={'32px'} height={'32px'} align={'center'} justify={'center'}
      style={{ visibility: switchEnabled ? 'visible' : 'hidden' }}
      onClick={onTokensSwitchClicked}
    >
      <SwitchIcon width={'16px'} />
    </Box>
    <TokenItem title={'To'} tokenType={to} />
  </Box>
}
