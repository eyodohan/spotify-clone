import Bottombar from "components/Bottombar";
import Content from "components/Content";
import Sidebar from "components/Sidebar";

function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <Bottombar />
    </>
  );
}

export default App;
