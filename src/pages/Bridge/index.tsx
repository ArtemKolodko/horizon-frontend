import {Box, Text} from 'grommet'
import React, {useState} from 'react'
import {observer} from "mobx-react";
import styled from "styled-components";
import {SwitchIcon} from "../../components/Icon";
import {Token} from "../../types";
import { TokenItem } from './TokenItem';
import {TokenSelect, TokensSelectModal} from "./TokenSelect";

const Container = styled(Box)`
  border-radius: 25px 25px 0 0;
`

const ButtonsContainer = styled(Box)`
  width: 100%;
`

const ButtonWrapper = styled(Box)`
  width: 50%;
  justify-content: center;
  align-items: center;
`

const LeftButton = styled(ButtonWrapper)`
  border-radius:  0 0 0 25px;
`

const RightButton = styled(ButtonWrapper)`
  border-radius:  0 0 25px 0;
`

export const BridgePage = observer(() => {
  const [from, setFrom] = useState(Token.ETH)
  const [to, setTo] = useState(Token.ONE)
  const [tokensType, setTokensType] = useState([Token.ONE, Token.ETH])
  const [tokensSelectOpened, setTokensSelectOpened] = useState(false)

  const onTokensSwitchClicked = () => {
    setFrom(to)
    setTo(from)
  }

  const onResetBridgeClick = () => {
    setFrom(Token.ETH)
    setTo(Token.ONE)
    setTokensType([Token.ONE, Token.ETH])
  }

  return <Box direction={'column'} align={'center'}>
    <Container width={'570px'} background={'modalBackground'} pad={'32px 0 0'}>
      <Box
        direction={'row'}
        justify={'between'}
        align={'center'}
        pad={{ bottom: '36px' }}
        border={{ side: 'bottom', color: 'border', size: '1px' }}
      >
        <TokenItem title={'From'} tokenType={from} />
        <Box
          width={'32px'} height={'32px'} align={'center'} justify={'center'}
          hoverIndicator={false}
          onClick={onTokensSwitchClicked}
        >
          <SwitchIcon width={'16px'} />
        </Box>
        <TokenItem title={'To'} tokenType={to} />
      </Box>
      <Box
        direction={'row'}
        justify={'center'}
        align={'center'}
        pad={{ top: '40px', bottom: '36px' }}
        border={{ side: 'bottom', color: 'border', size: '1px' }}
      >
        <TokenSelect selectedOptions={tokensType} onClick={() => setTokensSelectOpened(!tokensSelectOpened)} />
        {tokensSelectOpened &&
          <TokensSelectModal
              selectedOptions={tokensType}
              onSelectOption={(types) => setTokensType(types)}
              onClose={() => setTokensSelectOpened(false)}
          />
        }
      </Box>
      <Box
        direction={'row'}
        justify={'center'}
        align={'center'}
        pad={{ bottom: '36px' }}
        border={{ side: 'bottom', color: 'border', size: '1px' }}
      >
        <Box margin={{ top: '40px' }}>
          <Text color={'secondary'} weight={'bold'}>
            Destination address
          </Text>
        </Box>
      </Box>
    </Container>
    <ButtonsContainer direction={'row'} height={'66px'}>
      <LeftButton background={'#767676'} onClick={onResetBridgeClick}>Reset Bridge</LeftButton>
      <RightButton background={'#1F5AE2'}>Continue</RightButton>
    </ButtonsContainer>
  </Box>
})
