import { Component } from "react";

class ClassComp extends Component {

    constructor(props){ // props ları buradan karşılıyoruz
        //props lar extend edilen class'ın constructor ına gönderilmelidir
        super(props);

        this.state = {
            message: "Hellow World",
            hour: 12,
            minute: 35
        }

    }

    componentDidMount(){
        console.log("İlk girişte çalışır. (Render)")
    }

    componentDidUpdate(prevProps, prevState){
        console.log("re-render durumunda çalışır")

        if(prevState.hour !== this.state.hour){
            console.log("Hour was changed")
        }

        if(prevState.minute !== this.state.minute){
            console.log("Minute was changed")
        }
    }

    componentWillUnmount(){
        console.log("Component un mount oldugunda çalışır")
    }



  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <div>{this.state.hour}:{this.state.minute}</div>

        <button onClick={() => this.setState({hour:11})}>Set Hour</button>
        <button onClick={() => this.setState({minute:50})}>Set Minute</button>
      </div>
    );
  }
}

export default ClassComp;
