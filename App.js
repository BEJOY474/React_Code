import React from "react";
import Card from "./componentes/Card";
import Data from "./data.json"
import List from "./componentes/UniqueList/List";
function App(){


    // for (let x = 0; x < Data.length; x++) {
    //   items.push(<Card cardTitle = {Data[x].title} discription={Data[x].desc} />
    //   )
      
    // }

 
    return  <div>
              <h1 className='style1'>Welcome bijoy to react</h1>
              { 
               Data.map((items , index) => <Card key={index} cardTitle={items.title} discription={items.desc} /> )
              }
              <List />

             </div>
}

export default App;