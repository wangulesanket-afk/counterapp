import React, { Component } from 'react';

class Class extends Component{
    constructor(){
        super()
        this.state = {
            count: 1
        }
    }

    addClsCount = function(clsCount){
        this.setState({
          count:  clsCount + 1
        })
    }

    subClsCount = function(clsCount){
        if(clsCount > 1){
        this.setState({
          count: clsCount - 1
        })
    }
    }

    render(){
         
        return(
             <div class="container mt-5">
    <h2>Assignment-2 Counter Application</h2>
     
    <div class="table-responsive">
      <table class="table table-bordered">
        <tbody>
          <tr>
            <td class="text-left">Class Component
            <br/><br/><button onClick={() => this.addClsCount(this.state.count)} class="btn btn-primary btn-lg">+</button>
            &nbsp;
            <button onClick={() => this.subClsCount(this.state.count)} class="btn btn-primary btn-lg">-</button>
            </td> <td class="text-left">Count: <b>{this.state.count}</b></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
        )
    }
}

export default Class;