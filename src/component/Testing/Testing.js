import React from 'react'
import Login from "./Login";

const Testing = () => {
    return (
        <div className="Container app-container" role="parent">
          <div>
            <div>
              <h1>This is React Testing Tutorial</h1>
            </div>
          </div>
          <div>
            <div>
              <Login data-testid="child" />
            </div>
          </div>
        </div>
      );
}

export default Testing