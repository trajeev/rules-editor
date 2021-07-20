import React, {useState} from 'react'
import './App.css';
import Header from './components/header/header.component'
import SideBar from './components/sidebar/sidebar.component';
import Body from './components/body/body.component';
import AddRule from './components/addrule/addrule.component';
import {addRule} from './redux/rulesredux/rules.action'
import {useDispatch, useSelector} from 'react-redux'

function App() {
  const [rule, setRule] = useState('')
  const [showRule, switchRule] = useState(false)
  const rules = useSelector(state => state.rules.rules)
  const dispatch = useDispatch()

  const formSubmit = (event) => {
    event.preventDefault()
    dispatch(addRule(rule))
    switchRule(true)
  }

  const toggleRules = () => {
    switchRule(false)
  }

  return (
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
  );
}

export default App;
