import Recommend from "./Recommend";
import Tendency from "./Tendency";
import History from "./History";
import './stylesheets/Index.css';


const Top = () => {
  return (
    <div className='index-body'>
      <Recommend />
      <Tendency />
      <History />
    </div>
  )
}

export default Top;