import React from 'react';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Tabs from '../common/tabs/tabs';
import TabsContent from '../common/tabs/tabsContent';
import TabsHeader from '../common/tabs/tabsHeader';
import TabHeader from '../common/tabs/tabHeader';
import TabContent from '../common/tabs/tabContent';

class BillingCycle extends React.Component {

  render() {
    return (
      <div>
        <ContentHeader title='Billing Cycle' small='Register' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='List' icon='bars' target='tabList' />
              <TabHeader label='Insert' icon='plus' target='tabCreate' />
              <TabHeader label='Update' icon='pencil' target='tabUpdate' />
              <TabHeader label='Delete' icon='trash-o' target='tabDelete' />
            </TabsHeader>
            <TabsContent></TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

export default BillingCycle;
