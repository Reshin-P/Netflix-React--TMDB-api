
import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './Components/NavBar/App.css'
import Banner from "./Components/NavBar/Banner/Banner";
import RowPost from './Components/NavBar/RowPost/RowPost'
import {Actions,Orginals,Romance,Comedy,Documentaries} from './Urls'



function App() {
  return (
    <div>
<NavBar/>
<Banner/>
<RowPost url={Orginals} title="Netflix Orginals" />
<RowPost url={Actions} title="Actions" isSmall />
<RowPost url={Romance} title="Romance" isSmall />
<RowPost url={Comedy} title="Comedy" isSmall />
<RowPost url={Documentaries} title="Documentaries" isSmall />

    </div>

  )
}

export default App;
