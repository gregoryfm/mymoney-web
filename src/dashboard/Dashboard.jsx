import React from 'react';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <ContentHeader title='Dashboard' small='Version 0.0.1' />
        <Content>
          <Row>
            <ValueBox cols='12 4' color='green' icon='bank' value='RS 10' text='Total de Crédito' />
            <ValueBox cols='12 4' color='red' icon='credit-card' value='R$ 10' text='Total de Débito' />
            <ValueBox cols='12 4' color='blue' icon='money' value='R$ 0' text='Valor Consolidado' />
          </Row>
        </Content>
      </div>
    )
  }
}

export default Dashboard;
