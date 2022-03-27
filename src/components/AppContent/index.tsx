import React from 'react'
import {observer} from "mobx-react";
import { Box, Tab, Tabs } from 'grommet';
import {BridgePage} from "../../pages/Bridge";

const TabContentWrapper = (props: any) => {
  return <Box direction={'row'} align={'center'} pad={'56px 0 0 0'}>
    {props.children}
  </Box>
}

export const AppContent = observer(() => {
  return <Box align='center' margin={{ top: '-36px' }}>
    <Tabs>
      <Tab title="Bridge">
        <TabContentWrapper>
          <BridgePage />
        </TabContentWrapper>
      </Tab>
      <Tab title="Assets">
        <TabContentWrapper>Assets</TabContentWrapper>
      </Tab>
      <Tab title="Transactions">
        <TabContentWrapper>Transactions</TabContentWrapper>
      </Tab>
    </Tabs>
  </Box>
})
