import {Box, Button, Layer, Text, TextInput} from "grommet";
import {cutAddress, isAddressValid} from "../../utils";
import {CheckIcon} from "../../components/Icon";
import React, {useState} from "react";
import {Close} from "grommet-icons";

export interface IAddressSelectProps {
  address: string
  setAddress: (address: string) => void
}

interface ModalProps {
  address: string,
  setAddress: (address: string) => void,
  onClose: () => void
}

const AddressModal = (props: ModalProps) => {
  const [initialAddress, setInitialAddress] = useState(props.address)
  const [address, setAddress] = useState('')

  const onCloseModal = () => {
    if (isAddressValid(address)) {
      props.setAddress(address)
    }
    props.onClose()
  }

  return <Layer
    position={'top'}
    margin={'90px'}
    onEsc={onCloseModal}
    onClickOutside={onCloseModal}
  >
    <Box align={'flex-end'}>
      <Close size={'16px'} onClick={onCloseModal} style={{ cursor: 'pointer' }} />
    </Box>
    <Box
      width={'400px'}
      margin={{ top: '16px' }}
      pad={{ top: '36px', left: '28px', right: '28px', bottom: '36px' }}
      border={{ color: 'modalBorder' }}
      style={{ borderRadius: '10px' }}
    >
      <Text color={'modalTextSecondary'} size={'12px'}>Enter Custom Address</Text>
      <TextInput
        size={'12px'}
        placeholder="0x..."
        value={address}
        style={{ border: 'none', padding: '16px 0 0' }}
        onChange={event => setAddress(event.target.value)}
        // onBlur={event => props.setAddress(event.target.value)}
      />
    </Box>
    <Box align={'center'}>
      <Button primary
              margin={{ top: '16px' }}
              color={'#575757'}
              style={{ padding: '2px 24px' }}
              onClick={onCloseModal}
      >
        Cancel
      </Button>
    </Box>
  </Layer>
}

export const AddressSelect = (props: IAddressSelectProps) => {
  const { address } = props

  const [isModalOpened, setModalOpened] = useState(false)

  return <Box
    direction={'row'}
    justify={'center'}
    align={'center'}
    pad={{ bottom: '36px' }}
    border={{ side: 'bottom', color: 'border', size: '1px' }}
  >
    <Box margin={{ top: '20px' }}>
      <Box>
        <Text color={'secondary'} weight={'bold'} size={'12px'}>Destination address</Text>
      </Box>
      <Box
        direction={'row'}
        margin={{ top: '4px' }}
        gap={'8px'}
        justify={'center'}
        align={'center'}
        onClick={() => setModalOpened(true)}
      >
        <Text size={'18px'}>{cutAddress(address, 8)}</Text>
        <CheckIcon />
      </Box>
    </Box>
    {isModalOpened &&
      <AddressModal {...props} onClose={() => setModalOpened(false)} />
    }
  </Box>
}
