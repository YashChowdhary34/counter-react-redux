import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import DisplayCounter from "./components/DisplayCounter.jsx";
import Container from "./components/Container.jsx";
import Controls from "./components/Controls.jsx";
import { useSelector } from "react-redux";
import PrivayMessage from "./components/PrivacyMessage.jsx";

function App() {
  const { privacyToggle } = useSelector((store) => store.privacyToggle);
  return (
    <>
      <Container>
        <div className="px-4 py-5 my-5 text-center">
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {privacy === false ? <DisplayCounter /> : <PrivayMessage />}
            <Controls></Controls>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
