import React from 'react';
import Utama from './Components/Utama';
import {Link} from 'react-router-dom';

class App extends React.Component {

    render(){
      return (
        <div  className="text-center">
        <div className="co md-12 navbar bg-dark"> <hr /> 
          <Link className="col col-md-3" to="/">Beranda</Link>
          <Link className="col col-md-3" to="/Tentangsaya">Alert</Link>
          <Link className="col col-md-3" to="/Karya">Media</Link><hr />   
        </div>
        <div>
          <Utama />  
        </div>
        </div>
        
      );
    }
  }
export default App;
