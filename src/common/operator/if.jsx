import React from 'react';

// Should return props.children if props.test is true
export default props => ( props.test && props.children )
