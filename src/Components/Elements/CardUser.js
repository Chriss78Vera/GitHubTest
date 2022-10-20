import React from "react";
import { Card, Container } from "react-bootstrap";
import { GitHubuser } from "../API/GithubApi";

const CardUser = () => {
  const [url, setUrl] = React.useState(
    `https://api.github.com/users/Chriss78Vera`
  );
  const stateAxios = GitHubuser(url);
  const { state, data } = stateAxios;
  return (
    <div>
      {state ? (
        <></>
      ) : (
        <Container>
          <Card style={{ width: "22rem" }}>
            <Card.Img src={data.avatar_url} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>{data.bio}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      )}
    </div>
  );
};

export default CardUser;
