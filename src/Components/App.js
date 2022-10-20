import "../Styles/App.css";
import CardUser from "./Elements/CardUser";
import ReposList from "./Elements/ReposList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardUser />
        <Container style={{ marginTop: "50px", marginBottom: "20px" }}>
          <ReposList />
        </Container>
      </header>
    </div>
  );
}

export default App;
