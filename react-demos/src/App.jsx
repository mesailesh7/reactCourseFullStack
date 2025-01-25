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
import Profile from "./components/Profile.jsx";
import ShoppingList from "./components/ShoppingList.jsx";
import CopyInput from "./components/CopyInput.jsx";
import FetchingApi from "./components/FetchingApi.jsx";
import BasicEffect from "./components/BasicEffect.jsx";
import CounterEffect from "./components/CounterEffect.jsx";
import FetchDataEffect from "./components/FetchDataEffect.jsx";
import UserContext from "./components/UserContext.jsx";

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
      {/*<TodoList />*/}
      {/* <Profile /> */}
      {/* <ShoppingList /> */}
      {/* <CopyInput /> */}
      {/* <FetchingApi /> */}
      {/* <BasicEffect /> */}
      {/* <CounterEffect /> */}
      {/* <FetchDataEffect /> */}
      <UserContext />
    </div>
  );
};

export default app;
