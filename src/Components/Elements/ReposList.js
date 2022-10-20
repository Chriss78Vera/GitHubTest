import React, { Component } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GitHubuserRepos } from "../API/GithubApi";

const ReposList = () => {
/* A hook that is used to set the state of the component. */
  const [url, setUrl] = React.useState(
    `https://api.github.com/users/Chriss78Vera/repos`
  );
  const stateAxios = GitHubuserRepos(url);
  const { state, data } = stateAxios;
  return (
    <div>
      {state ? (
        <>NO HAY NINGUN DATO</>
      ) : (
        <Container>
          <ListGroup>
            {data.map((p) => (
              <ListGroup.Item variant="dark">
                <Row>
                  <Col> {p.name}</Col>
                  <Col>
                    <Button href={p.html_url} variant="dark">
                      GitHub
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      )}
    </div>
  );
};

export default ReposList;
