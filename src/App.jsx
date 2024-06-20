import Header from "./components/Header";
import HomeRouter from "./components/HomeRouter";
import Footer from "./components/Footer";
import { Todo } from "./components/Todo";
import  Home  from "./components/Home";


function App() {
  return (
    <>
      <Header />
      <HomeRouter />
      {/*
      <Todo />*/}
      <Footer />
    </>
  );
}

export default App;
