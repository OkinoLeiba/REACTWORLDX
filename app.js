import React from "react";
import ReactDOM from "react-dom";
//import Babel from "babel-loader";
//import Polaroid from "./polaroid.js";


var name = "Okino Kamali Leiba";


class World extends React.Component {
    render() {
        return (
           
               //<h1 style={{ onClick: "Polaroid" }}>Hello World!</h1>
               //<h1 onClick={Polaroid}>Hello World!</h1>
               <h1>Hello World!</h1>
               //<h2>{new Date().toLocaleTimeString()}</h2>
          
        );

    }

}





/*
function Polaroid() {
    const jsPolaroid = () => {
        alert("Success");
    };
    

    return (
        <h1 style={{ onClick: "Polaroid" }}>Test</h1>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<World />);
*/
ReactDOM.render(<World />, document.getElementById("root"));

/*
const root = ReactDOM.createRoot(document.getElementById("root"));
const h1 = <h1>Hello World!</h1>;
root.render(h1);
*/

