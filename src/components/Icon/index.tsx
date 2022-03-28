import React from "react";
import { ReactComponent as HarmonyImg } from '../../assets/icons/harmony_logo.svg'
import { ReactComponent as HorizonImg } from '../../assets/icons/horizon_logo.svg'
import { ReactComponent as EthImg } from '../../assets/icons/eth_logo.svg'
import {ReactComponent as SwitchImg} from '../../assets/icons/switch.svg'
import {ReactComponent as SettingsImg} from '../../assets/icons/settings.svg'
import {ReactComponent as CheckImg} from '../../assets/icons/check.svg'
import {ReactComponent as USDCImg} from '../../assets/icons/usdc.svg'
import styled from "styled-components";

const IconWrapper = styled.img`
  cursor: pointer;
`

export const HarmonyIcon = (props: any) => <HarmonyImg {...props} />
export const HorizonIcon = (props: any) => <HorizonImg {...props} />
export const EthIcon = (props: any) => <EthImg {...props} />
export const SwitchIcon = (props: any) => <SwitchImg {...props} />
export const SettingsIcon = (props: any) => <SettingsImg {...props} />
export const CheckIcon = (props: any) => <CheckImg {...props} />
export const USDCIcon = (props: any) => <USDCImg {...props} />
const Icon = (props: any) => <IconWrapper {...props} />

export default Icon
