import React from "react";
import RecipeList from "../RecipeList";
import NewRecipeForm from "../NewRecipeForm";
import EditRecipeModal from "../EditRecipeModal";
import "../index.css";
import CurrentUserRecipeList from "../CurrentUserRecipeList";
import RecipeShowPage from "../RecipeShowPage";

export default class RecipeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      viewRecipes: false,
      idOfRecipeToEdit: -1,
      addingNewRecipe: false,
      usersRecipes: [],
      recipeToShow: null
    };
  }

  componentDidMount() {
    this.getRecipes();
    this.getUsersRecipes();
  }

  getRecipes = async () => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/recipes/";
    try {
      const recipesResponse = await fetch(url, {
        credentials: "include"
      });

      const recipesJson = await recipesResponse.json();

      this.setState({
        recipes: recipesJson.data
      });
    } catch (err) {
      console.error(err);
    }
  };

  getUsersRecipes = async () => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/recipes/users_recipes";

    try {
      const recipesResponse = await fetch(url, {
        credentials: "include"
      });

      const recipesJson = await recipesResponse.json();

      this.setState({
        usersRecipes: recipesJson.data
      });
    } catch (err) {
      console.error(err);
    }
  };

  deleteRecipe = async idOfRecipeToDelete => {
    try {
      const url =
        process.env.REACT_APP_API_URL + "/api/v1/recipes/" + idOfRecipeToDelete;

      const deleteRecipeResponse = await fetch(url, {
        credentials: "include",
        method: "DELETE"
      });

      if (deleteRecipeResponse.status === 200) {
        this.setState({
          recipes: this.state.recipes.filter(
            recipe => recipe.id !== idOfRecipeToDelete
          ),
          usersRecipes: this.state.usersRecipes.filter(
            recipe => recipe.id !== idOfRecipeToDelete
          )
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  createRecipe = async recipeToAdd => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/recipes/";

      const createdRecipeResponse = await fetch(url, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(recipeToAdd)
      });
      const createdRecipeJson = await createdRecipeResponse.json();

      let usersRecipes = this.state.usersRecipes;

      usersRecipes.push(createdRecipeJson.data);

      if (createdRecipeResponse.status === 201) {
        this.setState({
          recipes: [...this.state.recipes, createdRecipeJson.data],
          usersRecipes: usersRecipes
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  editRecipe = idOfRecipeToEdit => {
    this.setState({
      idOfRecipeToEdit: idOfRecipeToEdit
    });
  };

  showRecipe = async idOfRecipeToView => {
    try {
      const url =
        process.env.REACT_APP_API_URL + "/api/v1/recipes/" + idOfRecipeToView;

      const recipeResponse = await fetch(url, {
        credentials: "include"
      });

      const recipeJson = await recipeResponse.json();

      this.setState({
        recipeToShow: recipeJson.data
      });
    } catch (err) {
      console.error(err);
    }
  };

  updateRecipe = async updatedRecipeInfo => {
    try {
      const url =
        process.env.REACT_APP_API_URL +
        "/api/v1/recipes/" +
        this.state.idOfRecipeToEdit;

      const updatedRecipeResponse = await fetch(url, {
        credentials: "include",
        method: "PUT",
        body: JSON.stringify(updatedRecipeInfo),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const updatedRecipeJson = await updatedRecipeResponse.json();

      if (updatedRecipeResponse.status === 200) {
        const recipes = this.state.recipes;
        const indexOfRecipeBeingUpdated = recipes.findIndex(
          recipe => recipe.id === this.state.idOfRecipeToEdit
        );

        const usersRecipes = this.state.usersRecipes;

        const indexOfUserRecipeBeingUpdated = usersRecipes.findIndex(
          recipe => recipe.id === this.state.idOfRecipeToEdit
        );

        recipes[indexOfRecipeBeingUpdated] = updatedRecipeJson.data;

        usersRecipes[indexOfUserRecipeBeingUpdated] = updatedRecipeJson.data;

        this.setState({
          recipes: recipes,
          idOfRecipeToEdit: -1,
          usersRecipes: usersRecipes
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  closeModal = () => {
    this.setState({
      idOfRecipeToEdit: -1
    });
  };

  viewRecipes = () => {
    if (this.state.viewRecipes === false) {
      this.setState({
        viewRecipes: true
      });
    } else {
      this.setState({
        viewRecipes: false
      });
    }
  };

  changeStateWhenAddingRecipe = () => {
    if (this.state.addingNewRecipe === false) {
      this.setState({
        addingNewRecipe: true
      });
    } else {
      this.setState({
        addingNewRecipe: false
      });
    }
  };

  hideRecipe = () => {
    this.setState({
      recipeToShow: null
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.recipeToShow !== null && (
          <RecipeShowPage
            recipeToShow={this.state.recipeToShow}
            hideRecipe={this.hideRecipe}
          />
        )}
        <div className="Span-Div">
          <span className="RecipeContainer-Span" onClick={this.viewRecipes}>
            {this.state.viewRecipes ? "Your Recipes" : "All Recipes"}
          </span>
          <span className="RecipeContainer-Span">|</span>
          <span
            className="RecipeContainer-Span"
            onClick={this.changeStateWhenAddingRecipe}
          >
            Add Recipe
          </span>
        </div>

        {this.state.addingNewRecipe !== false && (
          <NewRecipeForm
            createRecipe={this.createRecipe}
            changeStateWhenAddingRecipe={this.changeStateWhenAddingRecipe}
          />
        )}
        {this.state.viewRecipes ? (
          <RecipeList
            recipes={this.state.recipes}
            showRecipe={this.showRecipe}
          />
        ) : (
          <CurrentUserRecipeList
            recipes={this.state.usersRecipes}
            deleteRecipe={this.deleteRecipe}
            editRecipe={this.editRecipe}
            showRecipe={this.showRecipe}
          />
        )}

        {this.state.idOfRecipeToEdit !== -1 && (
          <EditRecipeModal
            key={this.state.idOfRecipeToEdit}
            recipeToEdit={this.state.recipes.find(
              recipe => recipe.id === this.state.idOfRecipeToEdit
            )}
            updateRecipe={this.updateRecipe}
            closeModal={this.closeModal}
          />
        )}
      </React.Fragment>
    );
  }
}
