import React from "react";
import harmonyImg from '../../assets/icons/harmony_logo.svg'
import horizonImg from '../../assets/icons/horizon_logo.svg'
import ethImg from '../../assets/icons/eth_logo.svg'
import switchImg from '../../assets/icons/switch.svg'
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
    return <img {...props} src={switchImg} />
}

const Icon = (props: any) => {
    return <IconWrapper {...props} />
}

export default Icon
