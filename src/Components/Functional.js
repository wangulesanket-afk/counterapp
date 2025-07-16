import React, { useState } from 'react';

const Functional = function() {
    const [count,setCount] = useState(1);

    const addFunCount = function() {
        setCount(count + 1);
    }

    const subFunCount = function() {
        if(count > 1){
        setCount(count - 1);
        }
    }
    return (
         <div class="container mt-1">     
    <div class="table-responsive">
      <table class="table table-bordered">
        <tbody>
          <tr>
            <td class="text-left">Function Component
            <br/><br/><button onClick={() => addFunCount()} class="btn btn-primary btn-lg">+</button>
            &nbsp;
            <button onClick={() => subFunCount()} class="btn btn-primary btn-lg">-</button>
            </td> 
            <td class="text-left">Count: <b>{count}</b></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    )
}

export default Functional;