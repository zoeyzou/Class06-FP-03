import React from 'react'

const Progress = () =>
  <div className="progress mt-3 mb-3">
    <div
      className="progress-bar progress-bar-striped progress-bar-animated"
      role="progressbar"
      aria-valuenow="100"
      aria-valuemin="0"
      aria-valuemax="100"
      style={{width: '100%'}}>
    </div>
  </div>

export default Progress

