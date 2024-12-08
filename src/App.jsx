import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { userContext } from "./Utils/userContext";
import LoadingBar from "react-top-loading-bar";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("general");

  const [progress, setProgress] = useState(0);

  return (
    <>
      <userContext.Provider
        value={{ category: category, setCategory: setCategory }}
      >
        <NavBar />
        <LoadingBar
          height={3}
          color="#667eea"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        {/* <News pageSize={10} category={category} setProgress={setProgress} apiKey={apiKey}/> */}
        <News />
        <Footer />
      </userContext.Provider>
    </>
  );
}

export default App;
