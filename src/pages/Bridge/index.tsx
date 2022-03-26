import {Box, Text} from 'grommet'
import React, {useState} from 'react'
import {observer} from "mobx-react";
import styled from "styled-components";
import {SwitchIcon} from "../../components/Icon";
import {Token} from "../../types";
import { TokenItem } from './TokenItem';

const Container = styled(Box)`
  border-radius: 25px 25px 0 0;
`

export const BridgePage = observer(() => {
  const [from, setFrom] = useState(Token.ETH)
  const [to, setTo] = useState(Token.ONE)

  const onTokensSwitchClicked = () => {
    setFrom(to)
    setTo(from)
  }

  return <Box direction={'row'} align={'center'}>
    <Container width={'570px'} background={'modalBackground'} pad={'32px 0'}>
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
  </Box>
})
