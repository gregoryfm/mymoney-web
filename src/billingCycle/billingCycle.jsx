import React from 'react';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Tabs from '../common/tabs/tabs';
import TabsContent from '../common/tabs/tabsContent';
import TabsHeader from '../common/tabs/tabsHeader';

class BillingCycle extends React.Component {

  render() {
    return (
      <div>
        <ContentHeader title='Billing Cycle' small='Register' />
        <Content>
          <Tabs>
            <TabsHeader></TabsHeader>
            <TabsContent></TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

export default BillingCycle;
