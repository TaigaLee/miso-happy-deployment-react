import React from "react";
import { Form, Button, Label, Modal, Header } from "semantic-ui-react";

export default class EditRecipeModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.recipeToEdit.name,
      origin: props.recipeToEdit.origin,
      ingredients: props.recipeToEdit.ingredients,
      instructions: props.recipeToEdit.instructions
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateRecipe(this.state);
  };

  render() {
    return (
      <Modal open={true} closeIcon={true} onClose={this.props.closeModal}>
        <Header>Enter Recipe Info</Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Label>Name:</Label>
            <Form.Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Label>Origin:</Label>
            <Form.Input
              type="text"
              name="origin"
              value={this.state.origin}
              onChange={this.handleChange}
            />
            <Label>Ingredients:</Label>
            <Form.Input
              type="textarea"
              name="ingredients"
              value={this.state.ingredients}
              onChange={this.handleChange}
            />
            <Label>Instructions:</Label>
            <Form.Input
              type="textinstructionsarea"
              name="instructions"
              value={this.state.instructions}
              onChange={this.handleChange}
            />
            <Modal.Actions>
              <Button type="Submit">Update Recipe!</Button>
            </Modal.Actions>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}
