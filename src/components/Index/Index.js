import Recommend from "./Recommend";
import Tendency from "./Tendency";
import History from "./History";
import './stylesheets/Index.css';


const Index = () => {
  return (
    <div class='index-body'>
      <Recommend />
      <Tendency />
      <History />
    </div>
  )
}

export default Index;