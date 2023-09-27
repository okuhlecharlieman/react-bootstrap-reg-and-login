/* The following line can be included in your src/index.js or App.js file */
import "./App.scss";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div>
      <h1>
        Example heading
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
    </div>
  );
}

export default App;
