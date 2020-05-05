import React from "react";
import { Form, Button, Label, Modal, Header } from "semantic-ui-react";

export default class UserSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.loggedInUser.username,
      password: null,
      editingUser: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateUser(this.state);
    this.editingUser();
  };

  editingUser = () => {
    if (this.state.editingUser === false) {
      this.setState({
        editingUser: true
      });
    } else {
      this.setState({
        editingUser: false
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.editingUser !== false && (
          <Modal open={true} closeIcon={true} onClose={this.editingUser}>
            <Header>
              <h3>Edit User Information </h3>
            </Header>
            <Modal.Content>
              <Form onSubmit={this.handleSubmit}>
                <Label>Username</Label>
                <Form.Input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <Label>Password(REQUIRED)</Label>
                <Form.Input
                  type="password"
                  name="password"
                  placeholder="Enter new password"
                  onChange={this.handleChange}
                />
                <Modal.Actions>
                  <Button type="Submit">Edit User</Button>
                </Modal.Actions>
              </Form>
            </Modal.Content>
          </Modal>
        )}
        <div
          style={{
            textAlign: "center",
            border: "5px solid red",
            padding: "20px",
            margin: "20px auto",
            width: "200px"
          }}
        >
          <h1> User Settings Panel </h1>
          <Button
            style={{ marginTop: "20px" }}
            color="red"
            onClick={() => this.props.deleteUser(this.props.loggedInUser.id)}
          >
            Delete user
          </Button>
          <Button
            style={{ marginTop: "20px" }}
            color="red"
            onClick={this.editingUser}
          >
            {" "}
            Edit User{" "}
          </Button>
        </div>
      </div>
    );
  }
}
