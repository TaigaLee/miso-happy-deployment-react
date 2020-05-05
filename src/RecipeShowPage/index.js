import React from "react";
import { Container, Header, Button } from "semantic-ui-react";
import "../index.css";

export default class RecipeShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeToShow: props.recipeToShow
    };
  }

  render() {
    return (
      <div className="RecipeShowPage-Div">
        <Container text style={{ textAlign: "center" }}>
          <Header
            as="h1"
            style={{ color: "red", fontFamily: "Carter One", fontSize: "3em" }}
          >
            {this.state.recipeToShow.name}
          </Header>
          <p> Origin: {this.state.recipeToShow.origin} </p>
          <p> Poster: {this.state.recipeToShow.poster.username} </p>
          <img
            src={this.state.recipeToShow.image}
            style={{ width: "300px" }}
            alt={this.state.recipeToShow.name}
          />
          <h3> Ingredients: {this.state.recipeToShow.ingredients} </h3>
          <h4> Instructions: {this.state.recipeToShow.instructions} </h4>
          <Button
            color="green"
            style={{ marginTop: "20px" }}
            onClick={this.props.hideRecipe}
          >
            {" "}
            Hide Recipe{" "}
          </Button>
        </Container>
      </div>
    );
  }
}
