var Pirama = React.createClass( {displayName: "Pirama",
		render: function(){
			return (
				React.createElement("div", null, 
					React.createElement("h1", null, " hello ", this.props.title, " ")
				)
				);
			}
		});

	React.render (React.createElement(Pirama, {title: "paok"}),document.getElementById("text"));