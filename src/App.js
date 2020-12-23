import Home from './pages/home'
import {Card} from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Card
      elevation={5}
      style={{
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin:"10em auto",
      }}
      >
        <Home/>
      </Card>
      
    </div>
  );
}

export default App;
