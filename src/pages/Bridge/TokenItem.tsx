import {Token, TokenName} from "../../types";
import {EthIcon, HarmonyIcon} from "../../components/Icon";
import {Box, Text} from "grommet";
import React from "react";

export interface ITokenItemProps {
  title: string
  tokenType: Token
}

export const TokenItem = (props: ITokenItemProps) => {
  const {title, tokenType} = props

  const icon = tokenType === Token.ETH
    ? <EthIcon height={'32px'} />
    : <HarmonyIcon height={'32px'} />

  return <Box align={'center'} width={'360px'}>
    <Text margin={{ bottom: '16px' }} color={'secondary'} weight={'bold'}>{title}</Text>
    {icon}
    <Text margin={{ top: '16px' }} style={{ textTransform: 'uppercase' }}>{TokenName[tokenType]}</Text>
  </Box>
}
