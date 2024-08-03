import { BrowserRouter, Route, Routes } from "react-router-dom";
import HelloWorld from "./components/01-hello-world/hello-world"
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
import Header from "./components/00-home/header/header";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "./components/00-home/menu/menu";




const App = () => {
    
    return(
        <BrowserRouter>
        <Header/>

        <Container fluid>
        <Row>
            <Col sm={2}>
                <Menu/>
            </Col>
            <Col sm={10}>
                <Routes>
                    <Route path="/hello-world" element={<HelloWorld/>}/>
                    <Route path="/jsx1" element={<Jsx1/>}/>
                    <Route path="/jsx2" element={<Jsx2/>}/>
                    <Route path="/jsx3" element={<Jsx3/>}/>
                    <Route path="/jsx4" element={<Jsx4/>}/>
                    <Route path="/jsx5" element={<Jsx5/>}/>
                    <Route path="/jsx6" element={<Jsx6/>}/>
                </Routes>
            </Col>
        </Row>
        </Container>

        {
        // const product = {
        //     title: "Women's Top",
        //     image: '../../assets/img/person3.jpg', 
        //     price: 70.00,
        //     discount: 10,
        //     rate: 5
        //   };
        
        /* 
        
       
        <Style1/>
        <Style2/>
        <Style3/>
        <Style4/>
        <Clock1/>
        <Image/>
        <Gallery/>
        <Practice/>
        <ProfileCard
                src="profile.jpg"
                name="Zisan"
                location="Istanbul, Turkey"
                statistics={
                    [
                        {
                            stat: 8,
                            title: "Shot"
                        },
                        {
                            stat: 1000,
                            title: "Followers"
                        },
                        {
                            stat: 50,
                            title: "Following"
                        }
                    ]
                }
            />
            <Practice
        src="profile.jpg"
        name="Zisan"
        location="Istanbul, Turkey"
        statistics = {
            [
                {
                    stat: 8,
                    title: "Shot" 
                },
                {
                    stat: 1000,
                    title: "Followers"
                },
                {
                    stat: 50,
                    title: "Following" 
                }
            ]
        }
        
        />
        <Homework
        src="person1.jpg"
        rating={4} 
        name="WOMEN'S TOP"
        price="$19.99" 
        />
        <Homework
        src="person3.jpg"
        rating={3} 
        name="WOMEN'S TOP"
        price="$29.99" 
        />
         <div className="app">
      <Homework1
        title={product.title}
        image={product.image}
        price={product.price}
        discount={product.discount}
        rate={product.rate}
      />
    </div>
    <BootstrapStatic/>
    <BootstrapDynamic/>
    <Icon/> 
    <Events/>
    <Shop/>
    <Jsx7/>
    <Stateless/>
    <State/>
    <Counter/> 
    <HomeWork2/>
    <Birthday1/>
    <Birthday/>
    <UseEffect1/> 
    <Clock4/>
    <UseEffect2/>
    <UseEffect3/>
    <UseEffect4/>
    <CountryFilter/>
    <UseRef/> 
    <Scroll/>
    <ClassComp/> 
    <Cards/>
    <UserCards/> 
    <Axios/>
    <Countries/>
    <ParentComp/>
    <Form1/>
    <Form2/>
    <TodoApp/>
    <Form3/>
    <Form4/> 
    <FormikApp/>
    <Form5/> 
    <Form6/> 
    <Form7/> 
        */}
     
      

        </BrowserRouter>
    )
} 
export default App;

