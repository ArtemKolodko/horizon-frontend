import { Box, Table, TableBody, TableRow, TableCell, Text } from 'grommet'
import React from 'react'
import {cutAddress} from "../../utils";

export interface BridgeTableProps {
  address: string
  amount: string
  fee: string
  eta: string
  congestion: string
}

const Title = (props: { children: any }) => <TableCell scope="row">
  <Text color={'#AAAAAA'} size={'12px'}>{props.children}</Text>
</TableCell>

const Description = (props: { children: any }) => <TableCell align={'right'}>{props.children}</TableCell>

export const BridgeTable = (props: BridgeTableProps) => {
  return <Box margin={{ top: '32px', bottom: '32px' }}>
    <Table alignSelf={'center'} style={{ width: '80%' }}>
      <TableBody>
        <TableRow>
          <Title>Destination Address</Title>
          <Description>{cutAddress(props.address, 8)}</Description>
        </TableRow>
        <TableRow>
          <Title>Receiving Amount</Title>
          <Description>{props.amount}</Description>
        </TableRow>
        <TableRow>
          <Title>Estimated Network Fee</Title>
          <Description>{props.fee}</Description>
        </TableRow>
        <TableRow>
          <Title>ETA</Title>
          <Description>{props.eta}</Description>
        </TableRow>
      </TableBody>
    </Table>
  </Box>
}
