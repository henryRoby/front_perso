
import React from 'react';
import './new.css'

class NewAtelier extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: '', 
    }
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
}

onChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}
handleUploadImage(ev) {
  ev.preventDefault();

  const data = new FormData();
  data.append('image', this.uploadInput.files[0]);

  
  fetch('https://perso-back.herokuapp.com/api/users/newPhoto/',{
    method: 'POST',
    body: data,
  }).then((response) => {
    response.json().then((body) => {
      this.setState({ image: `https://perso-back.herokuapp.com/api/users/newPhoto/${body.image}`});
      console.log('ity ilay body.image', body.image);

    });
  });
}

  render() {
    return (
      <div className="container-fluid" >
        <form   onSubmit={this.handleUploadImage} className="md-form">
          <div className="form-group mx-sm-3 mb-2">
      
            <div className="row">
            <input ref={(ref) => { this.uploadInput = ref; }} id="fichier" type="file" name="image" />
                <button id="validate" className="btn btn-info">Enregistrer</button>
            </div>
        
          </div>

        </form>
      </div>

    );
  }
}

export default NewAtelier;
