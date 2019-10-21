import React from 'react';
import Div from './Div';
import Media from './Media';

class Tentangsaya extends React.Component {
    constructor(){
        super();
        this.state = {
          type:"secondary", 
          image:"242"
        }
      }
      changeimage = (event) => {  
        this.setState({image: event.target.value})
      }


    render(){
        return(
        <Div type={this.state.type}>
          <center> 

          <Media image={this.state.image}> 
          <h5>{this.state.title}</h5>
          {this.state.children}
          </Media>  

          <b className="text-left container">Gambar</b>
          <select className="form-control" name="type" value={this.state.image} onChange={this.changeimage}>
            <option value="asa.png">Img 1</option>
            <option value="dani.png">Img 2</option>
            <option value="react.png">Img 3</option>
          </select>
          
          <br /> <br /><br /> <br /><br />
          </center>
          </Div>
        )
    }
}

export default Tentangsaya;