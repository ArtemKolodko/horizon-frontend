import {Box, Meter} from 'grommet'
import React, {useEffect, useState} from 'react'
import {observer} from "mobx-react";
import styled from "styled-components";
import {NetworkType} from "../../types";
import { NetworkSelect } from './NetworkSelect';
import {TokensSelect} from "./TokensSelect";
import {AddressSelect} from "./AddressSelect";
import {BridgeTable} from "./DataTable";

enum Steps {
  fill = 'fill',
  confirm = 'confirm',
  bridging = 'bridging',
  success = 'success'
}

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

const MeterContainer = styled(Box)`
  svg {
    width: 100%;
  }
`

const LeftButton = styled(ButtonWrapper)`border-radius:  0 0 0 25px;`
const RightButton = styled(ButtonWrapper)`border-radius:  0 0 25px 0;`
const SingleButton = styled(ButtonWrapper)`width: inherit; border-radius:  0 0 25px 25px;`

const BridgeContent = (props: any) =>
  <Container width={'520px'} background={'modalBackground'} pad={'32px 0 0'}>
    {props.children}
  </Container>

export const BridgePage = observer(() => {
  const [step, setStep] = useState(Steps.fill)
  const [from, setFrom] = useState(NetworkType.ETH)
  const [to, setTo] = useState(NetworkType.ONE)
  const [destinationAddress, setDestinationAddress] = useState('0x72cb10c6bfa5624dd07ef608027e366bd690048f')
  const [amount, setAmount] = useState('1.123')
  const [tokensType, setTokensType] = useState([NetworkType.ONE, NetworkType.ETH])
  const [progressPercent, setProgressPercent] = useState(0)

  useEffect(() => {
    if (step === Steps.bridging) {
      setProgressPercent(0)
      const timout = 2000
      setTimeout(() => setStep(Steps.success), timout)
      const id = setInterval(() => {
        setProgressPercent(progressPercent => progressPercent + 1)
      }, timout / 100)
      return () => {
        clearInterval(id)
      }
    }
  }, [step])

  const onTokensSwitchClicked = () => {
    setFrom(to)
    setTo(from)
  }

  const onResetBridgeClick = () => {
    setFrom(NetworkType.ETH)
    setTo(NetworkType.ONE)
    setTokensType([NetworkType.ONE, NetworkType.ETH])
  }

  if (step === Steps.fill) {
    return <Box direction={'column'} align={'center'}>
      <BridgeContent>
        <NetworkSelect from={from} to={to} onTokensSwitchClicked={onTokensSwitchClicked} />
        <TokensSelect amount={amount} selectedOptions={tokensType} setTokensType={setTokensType} />
        <AddressSelect address={destinationAddress} setAddress={setDestinationAddress} />
      </BridgeContent>
      <ButtonsContainer direction={'row'} height={'66px'}>
        <LeftButton background={'#767676'} onClick={onResetBridgeClick}>Reset Bridge</LeftButton>
        <RightButton background={'#1F5AE2'} onClick={() => setStep(Steps.confirm)}>Continue</RightButton>
      </ButtonsContainer>
    </Box>
  } else if (step === Steps.confirm) {
    return <Box direction={'column'} align={'center'}>
      <BridgeContent>
        <NetworkSelect from={from} to={to} switchEnabled={false} />
        <BridgeTable address={destinationAddress} amount={amount} congestion={'Low'} eta={'12'} fee={'2.310'} />
      </BridgeContent>
      <ButtonsContainer direction={'row'} height={'66px'}>
        <LeftButton background={'#767676'} onClick={() => setStep(Steps.fill)}>Edit Details</LeftButton>
        <RightButton background={'#1F5AE2'} onClick={() => setStep(Steps.bridging)}>Start bridge</RightButton>
      </ButtonsContainer>
    </Box>
  } else if(step === Steps.bridging) {
    return <Box direction={'column'} align={'center'}>
      <BridgeContent>
        <NetworkSelect from={from} to={to} switchEnabled={false} />
        <BridgeTable address={destinationAddress} amount={amount} congestion={'Low'} eta={'12'} fee={'2.310'} />
      </BridgeContent>
      <ButtonsContainer direction={'column'}>
        <MeterContainer>
          <Meter
            values={[{
              value: progressPercent,
              label: 'sixty',
              color: '#1F5AE2',
              onClick: () => {}
            }]}
            thickness={'4px'}
            background={'modalBackground'}
            aria-label="meter"
          />
        </MeterContainer>
        <SingleButton background={'#2D2D2D'} height={'62px'}>Bringing...</SingleButton>
      </ButtonsContainer>
    </Box>
  } else if(step === Steps.success) {
    return <Box direction={'column'} align={'center'}>
      <BridgeContent>
        <NetworkSelect from={from} to={to} switchEnabled={false} />
        <BridgeTable address={destinationAddress} amount={amount} congestion={'Low'} eta={'12'} fee={'2.310'} />
      </BridgeContent>
      <ButtonsContainer direction={'row'} height={'66px'}>
        <SingleButton background={'#2D2D2D'} onClick={() => setStep(Steps.fill)}>Success!</SingleButton>
      </ButtonsContainer>
    </Box>
  }
  return null
})
