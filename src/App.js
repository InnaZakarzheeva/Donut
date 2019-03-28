import React, { Component } from 'react';
import './App.css';
import Navigation from './navigation/navigation';
import Header from './header/header';
import Main from './main/main';
import Form from './footer/form';

const arr=[
  {
    name: "Oreo",
    photo: [
      require("../src/image/oreo_donut.png"),
    ],
    seeMoreText: "At the heart of the yeast dough. Covered with delicate oreo cream and decorated with cookies oreo.",
  },
  {
    name: "Banana",
    photo: [
      require("../src/image/banana_donut.png"),
    ],
    seeMoreText: "Classic American donut without filling in sugar coating with banana flavor. At the heart of yeast dough.",
  },
  {
    name: "Strawberry",
    photo: [
      require("../src/image/strawberry_donut.png"),
    ],
    seeMoreText: "At the heart of rich yeast dough Stuffing - custard with strawberry flavor, covered with delicate sugar icing with strawberry flavor.",
  },
  {
    name: "Coconut",
    photo: [
      require("../src/image/coco_donut.png"),
    ],
    seeMoreText: "At the heart of the yeast dough. The filling is a custard with coconut flavor, covered with delicate icing and sprinkled with coconut chips.",
  },
  {
    name: "Marshmallow",
    photo: [
      require("../src/image/marshmallow_donut.png"),
    ],
    seeMoreText: "At the heart of the yeast dough. The filling is custard vanilla cream, covered with delicate chocolate icing and decorated with marshmallow marshmallow.",
  },
  {
    name: "Peanut",
    photo: [
      require("../src/image/peanut_donut.png"),
    ],
    seeMoreText: "Stuffing - French caramel, covered with delicate chocolate glaze with caramel flavor and sprinkled with crushed, roasted peanuts.",
  },
]

class App extends Component {
 
  render() {
    return (
      <div className="App">
       <Navigation/>
       <Header/>
       <div className="menu_wrapper">
                {
                  arr.map(item =>{ 
                    return(
                      <Main item={item} />
                    )
                  })
                }
              </div>
      <Form/>
     
                  

      </div>
    );
  }
}

export default App;
