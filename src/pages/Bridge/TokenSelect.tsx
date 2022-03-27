import {Box, Button, Layer, Text} from 'grommet'
import React from 'react'
import {observer} from "mobx-react";
import {CheckIcon, EthIcon, HarmonyIcon, SettingsIcon} from "../../components/Icon";
import {Token} from "../../types";

interface TokensOptionProps {
  values: Token[]
  isSelected: boolean;
  title: string
  description: string
  onClick: () => void
}

const TokensOption = (props: TokensOptionProps) => {
  return <Box
    direction={'row'}
    width={'354px'}
    border={{ color: '#FFFFFF' }}
    style={{ borderRadius: '7px', fontSize: '10px' }}
    onClick={props.onClick}
  >
    <Box pad={'16px'} justify={'center'} gap={'8px'}>
      {props.values.map(value => {
        return value === Token.ETH ? <EthIcon height={'25px'} /> : <HarmonyIcon height={'16px'} />
      })}
    </Box>
    <Box direction={'row'} pad={'18px 0'} width={'100%'} justify={'between'}>
      <Box gap={'4px'}>
        <Text size={'10px'} color={'#B9B9B9'}>{props.title}</Text>
        <Text weight={'bold'}>{props.description}</Text>
        <Text size={'10px'}>TOKENS</Text>
      </Box>
      <Box align={'end'} margin={{ top: '-16px' }} pad={{ right: '28px' }} justify={'center'}>
        {props.isSelected && <CheckIcon color={'#01E8A2'} />}
      </Box>
    </Box>
  </Box>
}

interface TokensModalProps {
  selectedOptions: Token[],
  onSelectOption: (options: Token[]) => void,
  onClose: () => void
}

export const TokensSelectModal = (props: TokensModalProps) => {
  const {selectedOptions, onSelectOption, onClose} = props

  return <Layer
    onEsc={onClose}
    onClickOutside={onClose}
  >
    <Box pad={{ top: '36px', left: '28px', right: '28px', bottom: '36px' }} style={{ borderRadius: '10px' }}>
      <Text size={'16px'}>Displaying Tokens</Text>
      <Box margin={{ top: '16px' }} gap={'16px'}>
        <TokensOption
          values={[Token.ETH, Token.ONE]}
          isSelected={selectedOptions.length === 2}
          title={'ERC-20 & HRC-20'}
          description={'Both Harmony & Ethereum'}
          onClick={() => onSelectOption([Token.ETH, Token.ONE])}
        />
        <TokensOption
          values={[Token.ETH]}
          isSelected={selectedOptions.length === 1 && selectedOptions.includes(Token.ETH)}
          title={'ERC-20'}
          description={'Only Ethereum'}
          onClick={() => onSelectOption([Token.ETH])}
        />
        <TokensOption
          values={[Token.ONE]}
          isSelected={selectedOptions.length === 1 && selectedOptions.includes(Token.ONE)}
          title={'HRC-20'}
          description={'Only Harmony'}
          onClick={() => onSelectOption([Token.ONE])}
        />
      </Box>
      <Box margin={{ top: '18px' }}>
        <Button label={'Close'} color={'#1F5AE2'} onClick={onClose} />
      </Box>
    </Box>
  </Layer>
}

export const TokenSelect = observer((props: { selectedOptions: Token[], onClick: () => void }) => {
  const {selectedOptions} = props
  const tokenType = selectedOptions.length === 2 ? 'BOTH' : selectedOptions[0]
  return <Box
    direction={'row'}
    round={'7px'}
    border={{ color: 'borderBox' }}
    pad={{ top: '8px', left: '16px', right: '16px', bottom: '8px' }}
    justify={'center'}
    align={'center'}
    gap={'8px'}
    {...props}
  >
    <Text color={'borderBox'} size={'12px'}>Token Type</Text>
    <Text>{tokenType}</Text>
    <SettingsIcon width={'10px'} height={'10px'}  />
  </Box>
})
