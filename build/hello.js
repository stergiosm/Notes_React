var Pirama = React.createClass( {displayName: "Pirama",
		render: function(){
			return (
				React.createElement("div", null, 
					React.createElement("h1", null, " hello ", this.props.title, " "), 
					React.createElement("h3", null, this.props.children)
				)
				);
			}
		});

	React.render (React.createElement(Pirama, {title: "paok"}, "kordelio"),document.getElementById("text"));