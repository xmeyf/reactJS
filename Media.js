import React, {Component} from 'react';

class Media extends Component {
    render() {
        return (
          <center>
            <div className="media my-3 container">  
              <img src={process.env.PUBLIC_URL+"/image/"+this.props.image}  
                className="mr-3" alt="media" width="40%" />  
                
              <div className="media-body text-left">  
                <h5 className="mt-5">{this.props.title}</h5>  
                  {this.props.children}  
              </div>  
            </div>  
            </center>
        );
    }
}
export default Media;