import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/00-home/header/header";
import Menu from "./components/00-home/menu/menu";
import HelloWorld from "./components/01-hello-world/hello-world";
import Jsx1 from "./components/03-jsx/jsx1";
import Jsx2 from "./components/03-jsx/jsx2";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
import Jsx6 from "./components/03-jsx/jsx6";
import Jsx7 from "./components/03-jsx/jsx7";
import Clock1 from "./components/05-clock1/clock1";
import Gallery from "./components/09-image/gallery";
import Image from "./components/09-image/image";
import Practice from "./components/10-practice/practice";
import ProfileCard from "./components/10-profile-card/profile-card";
import BootstrapDynamic from "./components/11-bootstrap/bootstrap-dynamic";
import BootstrapStatic from "./components/11-bootstrap/bootstrap-static";
import Icon from "./components/12-icons/icon";
import Events from "./components/13-events/events";
import Shop from "./components/14-products/shop";
import State from "./components/15-usestate/state";
import Stateless from "./components/15-usestate/stateless";
import Counter from "./components/16-counter/counter";
import Birthday from "./components/17-birthday/birthday";
import Birthday1 from "./components/17-birthday1/birthday";
import UseEffect1 from "./components/18-useeffect/useeffect1";
import UseEffect2 from "./components/18-useeffect/useeffect2";
import UseEffect3 from "./components/18-useeffect/useeffect3";
import UseEffect4 from "./components/18-useeffect/useeffect4";
import Clock4 from "./components/19-clock4/clock4";
import CountryFilter from "./components/20-country-filter/country-filter";
import Scroll from "./components/21-useref/scroll";
import UseRef from "./components/21-useref/useref";
import ClassComp from "./components/22-class-type-component/class-comp";
import UserCards from "./components/23-fecth-users/user-cards";
import Cards from "./components/24-fetch-users-v1/user-cards";
import Axios from "./components/25-axios/axios";
import Countries from "./components/26-axios-contries/countries";
import ParentComp from "./components/27-child-to-parent/parent-comp";
import Form1 from "./components/28-forms/form1";
import Form2 from "./components/28-forms/form2";
import Form3 from "./components/28-forms/form3";
import Form4 from "./components/28-forms/form4";
import Form5 from "./components/28-forms/form5";
import Form6 from "./components/28-forms/form6";
import Form7 from "./components/28-forms/form7";
import FormikApp from "./components/29-formik/myform";
import Homework from "./components/homework/02-homework/homework";
import Homework1 from "./components/homework/03-homework/homework1";
import HomeWork2 from "./components/homework/04-homework/homework2";
import TodoApp from "./components/homework/05-TodoApp/todo-app";
import Exchange from './components/30-context/exchange';
import StoreContext from './store';
import axios from 'axios';

const App = () => {
    const [counter, setCounter] = useState(10)
    const [currencies, setCurrencies] = useState({})

    const loadData = async () => { 
        try {
            const resp = await axios.get("https://api.frankfurter.app/latest?from=try");
            setCurrencies(resp.data.rates);
        } catch (err) {
            console.log(err);
        }
     }

     useEffect(() => {
        
        loadData();
     
       
     }, [])
     


  return ( 
    <StoreContext.Provider value={{counter,setCounter,currencies}}>
    <BrowserRouter>
      <Header />

      <Container fluid>
        <Row>
          <Col sm={2}>
            <Menu />
          </Col>
          <Col sm={10}>
            <Routes>
              <Route path="/hello-world" element={<HelloWorld />} />
              <Route path="/jsx1" element={<Jsx1 />} />
              <Route path="/jsx2" element={<Jsx2 />} />
              <Route path="/jsx3" element={<Jsx3 />} />
              <Route path="/jsx4" element={<Jsx4 />} />
              <Route path="/jsx5" element={<Jsx5 />} />
              <Route path="/jsx6" element={<Jsx6 />} />
              <Route path="/jsx7" element={<Jsx7 />} />
              <Route path="/clock1" element={<Clock1 />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/image" element={<Image />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/profile-card" element={<ProfileCard />} />
              <Route path="/bootstrap-static" element={<BootstrapStatic />} />
              <Route path="/bootstrap-dynamic" element={<BootstrapDynamic />} />
              <Route path="/icon" element={<Icon />} />
              <Route path="/events" element={<Events />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/stateless" element={<Stateless />} />
              <Route path="/state" element={<State />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/homework" element={<Homework />} />
              <Route path="/homework1" element={<Homework1 />} />
              <Route path="/homework2" element={<HomeWork2 />} />
              <Route path="/birthday1" element={<Birthday1 />} />
              <Route path="/birthday" element={<Birthday />} />
              <Route path="/useeffect1" element={<UseEffect1 />} />
              <Route path="/useeffect2" element={<UseEffect2 />} />
              <Route path="/useeffect3" element={<UseEffect3 />} />
              <Route path="/useeffect4" element={<UseEffect4 />} />
              <Route path="/clock4" element={<Clock4 />} />
              <Route path="/country-filter" element={<CountryFilter />} />
              <Route path="/useref" element={<UseRef />} />
              <Route path="/scroll" element={<Scroll />} />
              <Route path="/class-comp" element={<ClassComp />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/user-cards" element={<UserCards />} />
              <Route path="/axios" element={<Axios />} />
              <Route path="/countries" element={<Countries />} />
              <Route path="/parent-comp" element={<ParentComp />} />
              <Route path="/form1" element={<Form1 />} />
              <Route path="/form2" element={<Form2 />} />
              <Route path="/form3" element={<Form3 />} />
              <Route path="/form4" element={<Form4 />} />
              <Route path="/formik" element={<FormikApp />} />
              <Route path="/form5" element={<Form5 />} />
              <Route path="/form6" element={<Form6 />} />
              <Route path="/form7" element={<Form7 />} />
              <Route path="/todo-app" element={<TodoApp />} />
              <Route path="/exchange" element={<Exchange />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
    </StoreContext.Provider>
  );
}

export default App;
