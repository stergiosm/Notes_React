var Note = React.createClass( {

	getInitialState: function() {
		return {editing: false}
	},
	edit: function(){
		this.setState({editing: true});
	},
	save: function() {
		var val = this.refs.newText.getDOMNode().value;
		alert("to do :" + val);
		this.setState({editing: false});
	},
	remove: function(){
		alert('no');
	},
	renderDisplay: function() {
		return (<div className="note">
			<p>{this.props.children}</p>
			<div className="downRight">
				<button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil"/>
				<button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash"/>
			</div>
			</div>
			);
	},
	renderForm: function() {
		return (
			<div className="note">
				<textarea ref="newText" defaultValue={this.props.children} className="form-control"></textarea>
				<button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-save" />
			</div>
			);
	},
	render: function(){
		if(this.state.editing) {
			return this.renderForm();
		}
		else {
			return this.renderDisplay();
		}
	}
});

var Board = React.createClass({
	propTypes: {
		count: function(props, propName){

		}
	},
	render: function(){
		return (
			<div className="board"></div>
		)
	}
});

React.render(<Note> </Note>,document.getElementById("text"));