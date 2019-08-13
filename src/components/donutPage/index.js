import React from "react";
import Navigation from '../navigation/navigation';
import Header from '../header/header';
import Main from '../main/main';
import Form from '../footer/form';

const arr=[
    {
      id: 1,
      name: "Oreo",
      price: 3,
      photo: [
        require("../../image/oreo_donut.png"),
      ],
      seeMoreText: "At the heart of the yeast dough. Covered with delicate oreo cream and decorated with cookies oreo.",
    },
    {
      id: 2,
      name: "Banana",
      price: 2,
      photo: [
        require("../../image/banana_donut.png"),
      ],
      seeMoreText: "Classic American donut without filling in sugar coating with banana flavor. At the heart of yeast dough.",
    },
    {
      id: 3,
      name: "Strawberry",
      price: 2,
      photo: [
        require("../../image/strawberry_donut.png"),
      ],
      seeMoreText: "At the heart of rich yeast dough Stuffing - custard with strawberry flavor, covered with delicate sugar icing with strawberry flavor.",
    },
    {
      id: 4,
      name: "Coconut",
      price: 3,
      photo: [
        require("../../image/coco_donut.png"),
      ],
      seeMoreText: "At the heart of the yeast dough. The filling is a custard with coconut flavor, covered with delicate icing and sprinkled with coconut chips.",
    },
    {
      id: 5,
      name: "Marshmallow",
      price: 1,
      photo: [
        require("../../image/marshmallow_donut.png"),
      ],
      seeMoreText: "At the heart of the yeast dough. The filling is custard vanilla cream, covered with delicate chocolate icing and decorated with marshmallow marshmallow.",
    },
    {
      id: 6,
      name: "Peanut",
      price: 1,
      photo: [
        require("../../image/peanut_donut.png"),
      ],
      seeMoreText: "Stuffing - French caramel, covered with delicate chocolate glaze with caramel flavor and sprinkled with crushed, roasted peanuts.",
    },
  ]

export default class DonutPage extends React.Component {
    render() {
        return (
            <div className='donut-wrapper'>
                <Navigation/>
                <Header/>
                <div className="menu_wrapper">
                            {
                            arr.map(item =>{ 
                                return(
                                  <Main item={item} key={item.name} />
                                )
                            })
                            }
                        </div>
                <Form/>
            </div>
        )
    }
}