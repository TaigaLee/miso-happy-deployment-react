import React from "react";
import { Button, Item } from "semantic-ui-react";

export default function RecipeList(props) {
  const recipes = props.recipes.map(recipe => {
    return (
      <React.Fragment>
        <Item key={recipe.id}>
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
              <div
                style={{
                  fontFamily: "Chewy",
                  color: "#6e9a42",
                  fontSize: "1em"
                }}
              >
                Posted by: {recipe.poster.username}
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
            color="green"
            onClick={() => props.showRecipe(recipe.id)}
            style={{ width: "15%", height: "10%", marginTop: "30px" }}
          >
            View
          </Button>
        </Item>
      </React.Fragment>
    );
  });

  return (
    <Item.Group divided style={{ width: "50%", margin: "20px auto" }}>
      {recipes}
    </Item.Group>
  );
}
