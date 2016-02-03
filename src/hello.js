var Pirama = React.createClass( {
		render: function(){
			return (
				<div>
					<h1>{this.props.title} </h1>
					<h3>{this.props.children}</h3>
				</div>
				);
			}
		});

	React.render (<Pirama title="Nai re paok">kordelio</Pirama>,document.getElementById("text"));