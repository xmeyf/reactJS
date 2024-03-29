import React from 'react';
import Alert from './Alert';
import Div from './Div';

class Tentangsaya extends React.Component {
    constructor(){
        super();
        this.state = {
          type:"dark",
          header:"y o u r  n a m e",
          content:"class - number"
        }
      }
            // fungsi untuk mengubah tipe  
            changeTypeAlert = (event) =>{  
              this.setState({type: event.target.value})  
            }  
            // fungsi untuk mengubah header  
            changeHeaderAlert = (event) => {  
              this.setState({header: event.target.value})  
            }  
            // fungsi untuk mengubah content  
            changeContentAlert = (event) => {  
              this.setState({content: event.target.value})
            }


    render(){
        return(
        <Div type={this.state.type}>

          <Alert header={this.state.header}>  
            {this.state.content}
          </Alert> 

          <hr />
          <h4>Alert Control</h4>
          <b className="text-left">Tipe Alert</b>
          <select className="form-control" name="type" value={this.state.type} onChange={this.changeTypeAlert}>
            <option value="success">success</option>
            <option value="warning">warning</option>
            <option value="danger">Danger</option>
            <option value="info">Info</option>
          </select>
          
          <b className="text-left">Header Alert</b>  
          <input type="text" name="header" className="form-control" value={this.state.header}
          onChange={this.changeHeaderAlert} />  
            <b className="text-left">Content Alert</b>  
          <input type="text" name="content" className="form-control" value={this.state.content}  
          onChange={this.changeContentAlert} />
          <br /><br /><br /><br /><br /><br />
          </Div>
        )
    }
}

export default Tentangsaya;