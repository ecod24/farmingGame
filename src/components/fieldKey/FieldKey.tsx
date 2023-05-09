import React from 'react';

import FieldTile from '../fieldTile/FieldTile';

import './FieldKey.css';

const FieldKey = () => {
  return (
    <div className="fieldKey">
      <div className="fieldKey__entry"><FieldTile tile="H" /> House</div>
      <div className="fieldKey__entry"><FieldTile tile="L" /> Land</div>
      <div className="fieldKey__entry"><FieldTile tile="F" /> Forest</div>
      <div className="fieldKey__entry"><FieldTile tile="W" /> Water</div>
    </div>
  )
}

export default FieldKey