import React, {Component} from 'react';

class Media extends Component {
    render() {
        return (
          <center>
            <div>  
              <img src={process.env.PUBLIC_URL+"/image/"+this.props.image}  
                className="col col-md-5" alt="media" width="100%" />  
            </div>  
            </center>
        );
    }
}
export default Media;