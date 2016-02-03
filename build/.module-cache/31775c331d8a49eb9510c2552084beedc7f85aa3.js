var Pirama = React.createClass( {displayName: "Pirama",
		render: function(){
			return (
				React.createElement("div", null, 
					React.createElement("h1", null, " hello")
				)
				);
			}
		});

	React.render (React.createElement(Pirama, null),document.getElementById("text"));