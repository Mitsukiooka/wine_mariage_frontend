import Mariage from "./Mariage";
import './stylesheets/Recommend.css';

const Recommend = () => {
  return (
    <>
      <div className='index-recommend'>
        <div className="index-recommend-content">
          <div className='index-recommend-title'>
            <p>Recommendation</p>
            <div className='recommend-contents'>
              <img src="./sample.jpg"></img>
              <ul>
                <li>name</li>
                <li>kind</li>
                <li>country</li>
                <li>maker</li>
                <li>score</li>
              </ul>
            </div>
          </div>
        </div>
        <Mariage />
      </div>
    </>
  )
};

export default Recommend;