import React from "react";
import { Container, Grid, List, Segment } from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment
      vertical
      style={{ padding: "5em 0em", backgroundColor: "#004d40", color: "white" }}
    >
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={5}>
              <List link inverted>
                <List.Item
                  as="a"
                  style={{ fontWeight: "bold", fontSize: "1.2em" }}
                >
                  Explore
                </List.Item>
                <List.Item as="a">Home</List.Item>
                <List.Item as="a">Questions</List.Item>
                <List.Item as="a">Articles</List.Item>
                <List.Item as="a">Tutorials</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <List link inverted>
                <List.Item
                  as="a"
                  style={{ fontWeight: "bold", fontSize: "1.2em" }}
                >
                  Support
                </List.Item>
                <List.Item as="a">FAQ</List.Item>
                <List.Item as="a">Help</List.Item>
                <List.Item as="a">Contact Us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <List link inverted>
                <List.Item
                  as="a"
                  style={{ fontWeight: "bold", fontSize: "1.2em" }}
                >
                  Stay Connected
                </List.Item>
                <List.Item as="a" href="#">
                  <i className="facebook f icon"></i>
                </List.Item>
                <List.Item as="a" href="#">
                  <i className="twitter icon"></i>
                </List.Item>
                <List.Item as="a" href="#">
                  <i className="instagram icon"></i>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <List link inverted horizontal>
                <List.Item
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  DEV@Deakin 2022
                </List.Item>

                <Grid.Row></Grid.Row>
                <List.Item as="a">Privacy Policy</List.Item>
                <List.Item as="a">Terms</List.Item>
                <List.Item as="a">Code of Conduct</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
