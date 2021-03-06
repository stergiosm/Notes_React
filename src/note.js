var Note = React.createClass( {

	getInitialState: function() {
		return {editing: false}
	},
	edit: function(){
		this.setState({editing: true});
	},
	save: function() {
		this.props.onChange(this.refs.newText.getDOMNode().value, this.props.index);
		this.setState({editing: false});
	},
	remove: function(){
		this.props.onRemove(this.props.index);
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
				<textarea autoFocus ref="newText" defaultValue={this.props.children} className="form-control"></textarea>
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
			if (typeof props[propName] !== "number") {
				return new Error('problem');
			}
			if (typeof props[propName] > 50 ) {
				return new Error('too many');
			}
		}
	},
	add: function(text) {
		var arr = this.state.notes;
		arr.push(text);
		this.setState({notes: arr});
	},
	update: function(newText, i) {
		var arr = this.state.notes;
		arr[i] = newText;
		this.setState({ notes: arr});
	},
	remove: function(i) {
		var arr = this.state.notes;
		arr.splice(i, 1);
		this.setState({notes: arr}); 
	},
	eachNote: function(note, i) {
		return (
				<Note key={i}
					index={i}
					onChange={this.update}
					onRemove={this.remove}
				>{note}</Note>
				);
	},
	getInitialState: function() {
		return {
			notes: []
		};
	},
	render: function(){
		return (
			<div className="board">
				{this.state.notes.map(this.eachNote)}
				<button className="btn btn-lg btn-success glyphicon glyphicon-plus"
				onClick={this.add.bind(null, "")}/>
			</div>
		)
	}
});

React.render(<Board count = {51}> </Board>,document.getElementById("text"));

