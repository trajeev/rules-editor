import './App.css';
import Header from './components/header/header.component'
import SideBar from './components/sidebar/sidebar.component';
import Body from './components/body/body.component';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Body />
    </div>
  );
}

export default App;
