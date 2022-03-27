import React from "react";
import harmonyImg from '../../assets/icons/harmony_logo.svg'
import horizonImg from '../../assets/icons/horizon_logo.svg'
import ethImg from '../../assets/icons/eth_logo.svg'
import {ReactComponent as SwitchImg} from '../../assets/icons/switch.svg'
import {ReactComponent as SettingsImg} from '../../assets/icons/settings.svg'
import {ReactComponent as CheckImg} from '../../assets/icons/check.svg'
import styled from "styled-components";

const IconWrapper = styled.img`
  cursor: pointer;
`

export const HarmonyIcon = (props: any) => {
    return <img {...props} src={harmonyImg} />
}

export const HorizonIcon = (props: any) => {
    return <img {...props} src={horizonImg} />
}

export const EthIcon = (props: any) => {
    return <img {...props} src={ethImg} />
}

export const SwitchIcon = (props: any) => {
    return <SwitchImg {...props} />
}

export const SettingsIcon = (props: any) => <SettingsImg {...props} />
export const CheckIcon = (props: any) => <CheckImg {...props} />

const Icon = (props: any) => {
    return <IconWrapper {...props} />
}

export default Icon
