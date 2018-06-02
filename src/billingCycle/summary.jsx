import React from 'react';

import Grid from '../common/layout/Grid';
import Row from '../common/layout/row';
import ValueBox from '../common/widget/valueBox';

export default ({credit, debit}) => (
  <Grid cols='12'>
    <fieldset>
      <legend>Summary</legend>
      <Row>
        <ValueBox col='12 4' color='green' icon='bank' text='Total Credit' value={`R$ ${credit}`}/>
        <ValueBox col='12 4' color='red' icon='credit-card' text='Total Debit' value={`R$ ${debit}`} />
        <ValueBox col='12 4' color='blue' icon='money' text='Consolidated Value' value={`R$ ${credit - debit}`} />
      </Row>
    </fieldset>
  </Grid>
)
