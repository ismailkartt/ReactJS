import HelloWorld from "./components/01 - hello-world/hello-world";
import Jsx1 from "./components/03 - jsx/jsx1";
import Jsx2 from "./components/03 - jsx/jsx2";
import Jsx3 from "./components/03 - jsx/jsx3";
import Jsx4 from "./components/03 - jsx/jsx4";
import Jsx5 from "./components/03 - jsx/jsx5";
import Jsx6 from "./components/03 - jsx/jsx6";
import Style1 from "./components/04 - styles/style1";
import Style2 from "./components/04 - styles/style2";
import Style3 from "./components/04 - styles/style3";
import Style4 from "./components/04 - styles/style4";
import Clock1 from "./components/05-clock1/clock1";
import Clock2 from "./components/05-clock1/clock2";
import Greetings from "./components/06-props1/greetings";
import Products from "./components/07-props2/products";
import Clock3 from "./components/08-props-clock2/clock3";
import Homework1 from "./components/homework/01-homework/homework";

const App = () => {
    return (
        <div>
            {/* <HelloWorld/>
            <ul>
             <Jsx1/>   
            </ul>
            <Jsx2/>
            <Jsx3/>
            <Jsx4/>
            <Jsx5/>
            <Jsx6/>
            <Style1/>
            <Style2/>
            <Style3/>
            <Style4/>
            <Homework1/>
            <Clock1/>
            <Clock2/>
            <Greetings/>
            <Products/>
            */}
            
            <Clock3 textColor="red" bgColor="yellow"/>         

        </div>
    )
}

export default App;
