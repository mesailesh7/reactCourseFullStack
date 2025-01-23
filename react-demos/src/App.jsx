import Add from "./components/Add";
import Greet from "./components/Greeting";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";
import JSXRules from "./components/JSXRules.jsx";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo.jsx";
import ListArray from "./components/listArray.jsx";
import Component from "./components/Component.jsx";
import UserStatus from "./components/UserStatus.jsx";
import Counter from "./components/Counter.jsx";
import TodoList from "./components/TodoList.jsx";

const app = () => {
  return (
    <div>
      {/*<Add />*/}
      {/*<Greet />*/}
      {/*<WelcomeMessage />*/}
      {/* <Header />
        <MainContent />
        <Footer />
        <JSXRules />
        <Greeting timeOfDay="Afternoon"/>
        <ProductInfo/>
        <ListArray/>
        <Component isValid={false}/>
        <UserStatus loggedIn={true} isAdmin={false}/> */}
      {/* <Counter /> */}
      {/* <h1>Hello world</h1> */}
      <TodoList />
    </div>
  );
};

export default app;
