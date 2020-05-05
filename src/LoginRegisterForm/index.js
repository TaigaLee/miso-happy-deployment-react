import React from "react";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";
import Header from "../Header";
import HomePageSlider from "../HomePageSlider";

export default class LoginRegisterForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      username: "",
      action: "Login",
      viewRecipes: false
    };
  }

  headerStyle = {
    marginBottom: "10px",
    color: "white",
    textAlign: "center"
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.action === "Register") {
      this.props.register(this.state);
    } else {
      this.props.login(this.state);
    }
  };

  switchForm = () => {
    if (this.state.action === "Login") {
      this.setState({ action: "Register" });
    } else {
      this.setState({ action: "Login" });
    }
  };

  render() {
    return (
      <div style={{ backgroundColor: "#6e9a42" }}>
        <Header viewRecipes={this.viewRecipes} />
        <div>
          <h1
            style={{
              color: "white",
              fontFamily: "Lilita one",
              fontSize: "4em",
              textAlign: "center",
              paddingBottom: "20px",
              paddingTop: "20px"
            }}
          >
            Recipes that will leave you wonton more
          </h1>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                display: "inline-block",
                textAlign: "center"
              }}
            >
              <HomePageSlider />

              <Grid
                textAlign="center"
                style={{
                  paddingBottom: "25em",
                  paddingLeft: "35em",
                  marginLeft: "18em"
                }}
                verticalAlign="middle"
              >
                <Grid.Column style={{ maxWidth: 450 }}>
                  <header style={this.headerStyle}>
                    <h1 style={{ fontFamily: "Chewy" }}>
                      {this.state.action} Here!
                    </h1>
                  </header>
                  <Form size="massive">
                    <Segment stacked>
                      {this.state.action === "Register" && (
                        <React.Fragment>
                          <Form.Input
                            fluid
                            name="email"
                            icon="mail"
                            value={this.state.email}
                            onChange={this.handleChange}
                            iconPosition="left"
                            placeholder="Email"
                          />
                        </React.Fragment>
                      )}
                      <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                      />
                      <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />

                      <Button
                        onClick={this.handleSubmit}
                        type="Submit"
                        color="red"
                        fluid
                        size="large"
                      >
                        {this.state.action === "Login" ? "Log In" : "Sign Up"}
                      </Button>
                    </Segment>
                  </Form>
                  {this.state.action === "Login" ? (
                    <Message>
                      Need an account? Register{" "}
                      <span className="fake-link" onClick={this.switchForm}>
                        here
                      </span>
                    </Message>
                  ) : (
                    <Message>
                      Already have an account? Log in{" "}
                      <span className="fake-link" onClick={this.switchForm}>
                        here
                      </span>
                    </Message>
                  )}
                </Grid.Column>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
