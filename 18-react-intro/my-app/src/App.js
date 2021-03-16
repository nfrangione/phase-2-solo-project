import React from 'react';
import 'semantic-ui-css/semantic.min.css'

import Animals from './Animals'

function App() {
  return (
    <div className="ui inverted orange menu">
      <a className="item">
        <h2>
          <i class="paw icon"></i>
          <div class="content">
            ZooKeeper
          </div>
        </h2>
      </a>
      <div class="sub header">
          <Animals />
        </div>
    </div>
  )
}

export default App;
