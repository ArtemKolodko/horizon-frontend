import {Box, Button, Layer, Text} from 'grommet'
import React, {useState} from 'react'
import {CheckIcon, EthIcon, HarmonyIcon, SettingsIcon, SwitchIcon, USDCIcon} from "../../components/Icon";
import {NetworkName, NetworkType} from "../../types";

interface TokensOptionProps {
  values: NetworkType[]
  isSelected: boolean;
  title: string
  description: string
  onClick: () => void
}

const TokensOption = (props: TokensOptionProps) => {
  return <Box
    direction={'row'}
    width={'354px'}
    border={{ color: props.isSelected ? '#FFFFFF' : 'modalBorder' }}
    style={{ borderRadius: '7px', fontSize: '10px' }}
    onClick={props.onClick}
  >
    <Box pad={'16px'} justify={'center'} gap={'8px'}>
      {props.values.map(value => {
        return value === NetworkType.ETH ? <EthIcon height={'25px'} /> : <HarmonyIcon height={'16px'} />
      })}
    </Box>
    <Box direction={'row'} pad={'18px 0'} width={'100%'} justify={'between'}>
      <Box gap={'4px'}>
        <Text size={'10px'} color={'#B9B9B9'}>{props.title}</Text>
        <Text>{props.description}</Text>
        <Text size={'10px'}>TOKENS</Text>
      </Box>
      <Box align={'end'} margin={{ top: '-16px' }} pad={{ right: '28px' }} justify={'center'}>
        {props.isSelected && <CheckIcon color={'#01E8A2'} />}
      </Box>
    </Box>
  </Box>
}

interface TokensModalProps {
  selectedOptions: NetworkType[],
  onSelectOption: (options: NetworkType[]) => void,
  onClose: () => void
}

const TokensSelectModal = (props: TokensModalProps) => {
  const {selectedOptions, onSelectOption, onClose} = props

  return <Layer
    position={'center'}
    margin={'90px'}
    onEsc={onClose}
    onClickOutside={onClose}
  >
    <Box
      pad={{ top: '36px', left: '28px', right: '28px', bottom: '36px' }}
      border={{ color: 'modalBorder' }}
      style={{ borderRadius: '10px' }}
    >
      <Box align={'center'}>
        <Text size={'16px'} color={'titleSecondary'}>Displaying Tokens</Text>
      </Box>
      <Box margin={{ top: '16px' }} gap={'16px'}>
        <TokensOption
          values={[NetworkType.ETH, NetworkType.ONE]}
          isSelected={selectedOptions.length === 2}
          title={'ERC-20 & HRC-20'}
          description={'Both Harmony & Ethereum'}
          onClick={() => onSelectOption([NetworkType.ETH, NetworkType.ONE])}
        />
        <TokensOption
          values={[NetworkType.ETH]}
          isSelected={selectedOptions.length === 1 && selectedOptions.includes(NetworkType.ETH)}
          title={'ERC-20'}
          description={'Only Ethereum'}
          onClick={() => onSelectOption([NetworkType.ETH])}
        />
        <TokensOption
          values={[NetworkType.ONE]}
          isSelected={selectedOptions.length === 1 && selectedOptions.includes(NetworkType.ONE)}
          title={'HRC-20'}
          description={'Only Harmony'}
          onClick={() => onSelectOption([NetworkType.ONE])}
        />
      </Box>
      <Box margin={{ top: '18px' }}>
        <Button
          primary
          label={'Close'}
          color={{ dark: 'buttonBackground', light: 'buttonBackground'}}
          style={{ borderRadius: '7px' }}
          onClick={onClose}
        />
      </Box>
    </Box>
  </Layer>
}

export interface ITokensSelectProps {
  selectedOptions: NetworkType[]
  setTokensType: (tokens: NetworkType[]) => void
}

export const TokensSelect = (props: ITokensSelectProps) => {
  const {selectedOptions, setTokensType} = props

  const [isModalOpened, setModalOpened] = useState(false)

  const tokenType = selectedOptions.length === 2 ? 'BOTH' : selectedOptions[0]

  return <Box
    direction={'column'}
    justify={'center'}
    align={'center'}
    pad={{ top: '16px', bottom: '16px' }}
    border={{ side: 'bottom', color: 'border', size: '1px' }}
  >
    <Box
      direction={'row'}
      round={'7px'}
      border={{ color: 'borderBox' }}
      pad={{ top: '2px', left: '16px', right: '16px', bottom: '2px' }}
      justify={'center'}
      align={'center'}
      gap={'8px'}
      onClick={() => setModalOpened(true)}
    >
      <Text color={'borderBox'} size={'12px'}>Token Type</Text>
      <Text>{tokenType}</Text>
      <SettingsIcon width={'12px'} height={'12px'}  />
    </Box>
    <Box direction={'row'} justify={'between'} align={'center'} pad={{ bottom: '26px' }}>
      <Box align={'center'} width={'360px'}>
        <Text color={'secondary'}>Choose token</Text>
        <Text margin={{ top: '4px' }} size={'18px'}>USDC</Text>
        <Text margin={{ top: '8px' }} color={'secondary'} size={'12px'}>USD coin</Text>
      </Box>
      <Box width={'32px'} height={'32px'} align={'center'} justify={'center'}>
        <USDCIcon width={'40px'} />
      </Box>
      <Box align={'center'} width={'360px'}>
        <Text color={'secondary'}>Amount</Text>
        <Text margin={{ top: '4px' }} size={'18px'}>0.00</Text>
        <Text margin={{ top: '8px' }} size={'12px'} color={'#1F5AE2'}>100,000 available</Text>
      </Box>
    </Box>
    {isModalOpened &&
        <TokensSelectModal
            selectedOptions={selectedOptions}
            onSelectOption={(types) => setTokensType(types)}
            onClose={() => setModalOpened(false)}
        />
    }
  </Box>
}
