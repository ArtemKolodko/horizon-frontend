import {Box, Text} from "grommet";
import {cutAddress} from "../../utils";
import {CheckIcon} from "../../components/Icon";
import React from "react";

export interface IAddressSelectProps {
  address: string
  setAddress: (address: string) => void
}

export const AddressSelect = (props: IAddressSelectProps) => {
  const { address } = props
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
      <Box direction={'row'} margin={{ top: '4px' }} gap={'8px'} justify={'center'} align={'center'}>
        <Text size={'18px'}>{cutAddress(address)}</Text>
        <CheckIcon />
      </Box>
    </Box>
  </Box>
}
