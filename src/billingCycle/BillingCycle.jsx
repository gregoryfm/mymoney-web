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

import { init, create, update, remove } from './billingCycleActions';

import BillingCycleList from './BillingCycleList';
import BillingCycleForm from './BillingCycleForm';

class BillingCycle extends React.Component {

  componentWillMount() {
    this.props.init();
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
              <TabContent id='tabList'>
                <BillingCycleList />
              </TabContent>
              <TabContent id='tabCreate'>
                <BillingCycleForm
                    onSubmit={this.props.create}
                    submitLabel='Create'
                    submitClass='primary' />
              </TabContent>
              <TabContent id='tabUpdate'>
                <BillingCycleForm
                    onSubmit={this.props.update}
                    submitLabel='Update'
                    submitClass='info' />
              </TabContent>
              <TabContent id='tabDelete'>
                <BillingCycleForm
                    onSubmit={this.props.remove}
                    submitLabel='Remove'
                    submitClass='danger'
                    readOnly={true} />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { init, create, update, remove },
  dispatch
);

export default connect(null, mapDispatchToProps)(BillingCycle);
