import React from 'react';

class TabContent extends React.Component {
  render() {
    return (
      <div className='tab-pane'>
          {this.props.children}
      </div>
    )
  }
}

export default TabContent;
