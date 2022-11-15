import React from 'react';
import { createContext, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from '../src/components/Home';
import Place from '../src/components/place';

export const AppContext = createContext(null);
const App = () => {
    const[connectwallet, setconnectwallet] = useState(false)
    return(
       <AppContext.Provider value={{connectwallet, setconnectwallet}}>
         <Router>
            <Routes>
                <Route  path='/' element ={ <Home />}/>
                <Route  path='/place' element={ <Place/> }/>
            </Routes>
        </Router>
       </AppContext.Provider>
    );
}
export default App;