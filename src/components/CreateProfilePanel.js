require('styles/bootstrap.css');
require('styles/bootstrap-theme.css');
require('styles/style.css');


import React from 'react';
import request from 'superagent';
import ProfileListPanel from './ProfileListPanel';

/**
* The profile creation panel
*/
class CreateProfilePanel extends React.Component{
  constructor (props) {
    super(props);
    this.contact = new Object();
  }
  handleString (e) {
    e.preventDefault();
    if(!!e.target.value) {
      this.contact[e.target.id] = e.target.value;
    }
  }
	/**
	* Handle the profile submission
	*/
	handleSubmit (e) {
    /*
		e.preventDefault();
    request
    .post('http://localhost:8080/paloma/contact')
    .set('Content-Type', 'application/json')
    .send(JSON.stringify(this.contact))
    .end(function (err, res) {

    });*/
    this.props.changeContextViewPanel(<ProfileListPanel/>);
	}
  render () {
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label className="col-md-2 control-label" htmlFor="firstName">Surname *</label>
          <div className="col-md-3">
            <input id="firstName" name="firstName" className="form-control" type="text" onChange={this.handleString.bind(this)} required/>
          </div>
          <label className="col-md-2 control-label" htmlFor="lastName">Name *</label>
          <div className="col-md-3">
            <input id="lastName" className="form-control" type="text" onChange={this.handleString.bind(this)} required/>
          </div>
        </div>
				<div className="form-group">
          <label className="col-md-2 control-label" htmlFor="phone">Phone</label>
          <div className="col-md-3">
            <input id="phone" className="form-control" type="text" onChange={this.handleString.bind(this)} required/>
          </div>
          <label className="col-md-2 control-label" htmlFor="address">Adress</label>
          <div className="col-md-3">
            <input id="address" className="form-control" type="text" onChange={this.handleString.bind(this)}/>
          </div>
        </div>
				<div className="form-group">
          <label className="col-md-2 control-label" htmlFor="email">Mail (private) *</label>
          <div className="col-md-3">
            <input id="email" className="form-control" type="text" onChange={this.handleString.bind(this)} required/>
          </div>
          <label className="col-md-2 control-label" htmlFor="zip_code" onChange={this.handleString.bind(this)}>Zipcode</label>
          <div className="col-md-3">
            <input id="zip_code" className="form-control" type="text" onChange={this.handleString.bind(this)}/>
          </div>
        </div>
				<div className="form-group">
          <label className="col-md-2 control-label" htmlFor="proEmail">Mail (pro)</label>
          <div className="col-md-3">
            <input id="proEmail" className="form-control" type="text" onChange={this.handleString.bind(this)}/>
          </div>
          <label className="col-md-2 control-label" htmlFor="city">City</label>
          <div className="col-md-3">
            <input id="city" className="form-control" type="text" onChange={this.handleString.bind(this)}/>
          </div>
        </div>
				<div className="form-group">
          <label className="col-md-2 control-label" htmlFor="birthdate">Birthdate</label>
          <div className="col-md-3">
            <input id="birthdate" className="form-control" type="text" onChange={this.handleString.bind(this)}/>
          </div>
          <label className="col-md-2 control-label" htmlFor="country">Country</label>
          <div className="col-md-3">
            <input id="country" className="form-control" type="text" onChange={this.handleString.bind(this)}/>
          </div>
        </div>
				<div className="form-group">
			    <div className="col-md-offset-2 col-md-10">
			      <button type="submit" className="btn btn-default">Create</button>
			    </div>
			  </div>
      </form>
    );
  }
}

export default CreateProfilePanel;
