import React from "react";
import ReactDOM from "react-dom";



function Polaroid() {
    /*
    const jsPolaroid = () => {
        alert("success");
        return (
            <div id="polaroid" className="polaroid">
                <img src="Images/background_admin.jpg" alt="background" loading="eager" />
                <div id="text-container" className="text-container">
                    <p>Memories of Worlds, Hello</p>
                </div>
            </div>
        );
    };
    */
    window.alert("test");
}

//ReactDOM.render(<Polaroid />, getElementById("polaroid"));

const root = ReactDOM.createRoot(document.getElementById("polaroid"));
const click_polaroid = <Polaroid />;
root.render(click_polaroid);