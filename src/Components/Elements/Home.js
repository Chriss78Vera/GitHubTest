import React, { Component } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import "../../Styles/Home.css";
import { GitHubuser } from "../API/GithubApi";
import ReposList from "./ReposList";
const Home = () => {
  const [url, setUrl] = React.useState(
    `https://api.github.com/users/Chriss78Vera`
  );
  const stateAxios = GitHubuser(url);
  const { state, data } = stateAxios;
  return (
    <div className="Home-header">
      {state ? (
        <></>
      ) : (
        <Card>
          <Card.Header
            style={{
              backgroundColor: "black",
            }}
          >
            <Container style={{ textAlign: "center" }}>
              <Row>
                <Col sm={4} xs={8} md={4}>
                  <Container>
                    <Card style={{ width: "12rem", height: "16rem" }}>
                      <Card.Img variant="top" src={data.avatar_url} />
                      <Card.Body>
                        <Button variant="dark" href={data.html_url}>
                          GitHub
                        </Button>
                      </Card.Body>
                    </Card>
                  </Container>
                </Col>
                <Col sm={4} xs={12} md={8}>
                  <Container
                    style={{
                      color: "white",
                      fontSize: "30px",
                      fontWeight: "blod",
                      marginTop: "3rem",
                    }}
                  >
                    <p>{data.name}</p>
                    <p>{data.login}</p>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Card.Header>
          <Card.Body>
            <Container>
              <h4>About Me: </h4>
              <h6>{data.bio}</h6>
            </Container>
            <ReposList />
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Home;
