import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Tabs from '../common/tabs/tabs';
import TabsHeader from '../common/tabs/tabsHeader';
import TabsContent from '../common/tabs/tabsContent';
import TabHeader from '../common/tabs/TabHeader';
import TabContent from '../common/tabs/TabContent';
import { selectTab, showTabs } from '../common/tabs/tabActions';

class BillingCycle extends React.Component {

  componentWillMount() {
    this.props.selectTab('tabList');
    this.props.showTabs('tabList', 'tabCreate');
  }

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
            <TabsContent>
              <TabContent id='tabList'><h1>List</h1></TabContent>
              <TabContent id='tabCreate'><h1>Insert</h1></TabContent>
              <TabContent id='tabUpdate'><h1>Update</h1></TabContent>
              <TabContent id='tabDelete'><h1>Delete</h1></TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycle);
