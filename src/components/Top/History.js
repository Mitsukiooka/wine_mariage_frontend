import './stylesheets/History.css';

const History = () => {
  return (
    <div className='index-history'> 
      <div className='index-history-title'>
        <p>History</p>
        <div className='history-content'>
          <img src="./sample1.jpg"></img>
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
  )
};

export default History;