import React from "react";
import harmonyImg from '../../assets/icons/harmony_logo.svg'
import horizonImg from '../../assets/icons/horizon_logo.svg'

export const HarmonyIcon = (props: any) => {
    return <img {...props} src={harmonyImg} />
}

export const HorizonIcon = (props: any) => {
    return <img {...props} src={horizonImg} />
}

const Icon = (props: any) => {
    return <img {...props} />
}

export default Icon
