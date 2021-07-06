import React, {useState, createContext} from 'react'
import './App.css';
import Header from './components/header/header.component'
import SideBar from './components/sidebar/sidebar.component';
import Body from './components/body/body.component';
import AddRule from './components/addrule/addrule.component';

export const RulesContext = createContext()

function App() {
  const [rules, setRules] = useState([])
  const [rule, setRule] = useState('')
  const [showRule, switchRule] = useState(false)

  const formSubmit = (event) => {
    event.preventDefault()
    let copy = [...rules]
    copy = [...rules, rule]
    setRules(copy)
    switchRule(true)
  }

  const toggleRules = () => {
    switchRule(false)
  }

  return (
    <RulesContext.Provider value = {rules}>
      <div className="App">
        {rules.length === 0 ? 
        <div>
          <Header />
          <SideBar />
          <AddRule onsubmit = {formSubmit} onchange = {(event) => setRule(event.target.value)}/>
        </div>: (showRule ? 
        <div>
          <Header />
          <SideBar onclick = {toggleRules}/>
          <Body />
        </div> : 
        <div>
          <Header />
          <SideBar />
          <AddRule onsubmit = {formSubmit} onchange = {(event) => setRule(event.target.value)}/>
        </div>
        )
        }  
      </div>
    </RulesContext.Provider>
  );
}

export default App;
