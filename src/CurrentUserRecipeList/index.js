import React from "react";
import { Button, Item } from "semantic-ui-react";
import "../index.css";

export default function CurrentUserRecipeList(props) {
  const recipes = props.recipes.map(recipe => {
    return (
      <Item key={recipe.id} style={{ marginBottom: "10px" }}>
        <Item.Content>
          <Item.Header
            style={{
              color: "red",
              fontFamily: "Carter One",
              fontSize: "2em"
            }}
          >
            {recipe.name}
          </Item.Header>
          <Item.Meta>
            <div
              style={{
                marginBottom: "2px",
                color: "#6e9a42",
                fontFamily: "Chewy",
                fontSize: "1em"
              }}
            >
              Origin Country: {recipe.origin}
            </div>
          </Item.Meta>
          <Item.Description>
            <div
              style={{
                color: "red",
                fontFamily: "Lilita One",
                fontSize: "1.3em"
              }}
            >
              Ingredients: {recipe.ingredients}
            </div>
          </Item.Description>
        </Item.Content>
        <Button
          basic
          color="black"
          onClick={() => props.showRecipe(recipe.id)}
          style={{ width: "15%", height: "10%", marginTop: "30px" }}
        >
          View
        </Button>
        <Button
          basic
          color="green"
          style={{ width: "15%", height: "10%", marginTop: "30px" }}
          onClick={() => props.editRecipe(recipe.id)}
        >
          Edit
        </Button>
        <Button
          style={{ width: "15%", height: "10%", marginTop: "30px" }}
          basic
          color="red"
          onClick={() => props.deleteRecipe(recipe.id)}
        >
          Delete
        </Button>
      </Item>
    );
  });

  return (
    <React.Fragment>
      <h1 className="CurrentUserH1">Your Posted Recipes!</h1>
      <Item.Group divided style={{ width: "50%", margin: "20px auto" }}>
        {recipes}
      </Item.Group>
    </React.Fragment>
  );
}
