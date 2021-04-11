import React, {useState} from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import './App.css';
import AddColorForm from "./AddColorForm";
import Color from "./Color";
import ColorList from "./ColorList";


function Routes(){

    const initialColors = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
  };
  
  const [colors, updateColors] = useState(initialColors)
  
  function addColor(newColor) {
    updateColors(prevColors => ({
      ...prevColors, ...newColor
    }));
  }

  function renderCurrentColor(props) {
    const { color } = props.match.params;
    const hex = colors[color];
    return <Color {...props} hex={hex} color={color} />;
  };

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/colors">
                    <ColorList colors={colors}/>
                </Route>
                <Route exact path="/colors/new">
                    <AddColorForm addColor={addColor}/>
                </Route>
                <Route exact path="/colors/:color" render={renderCurrentColor}>
                </Route>
                <Redirect to="/colors" />
            </Switch>
        </BrowserRouter>
  )
}

export default Routes;
  