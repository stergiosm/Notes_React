var note = React.createClass( {displayName: "note",
	render: function(){
		return (React.createElement("div", null, 
			"hej"
			)
			);
	}
});

React.render(React.createElement("note", null), document.getElementById("text"));