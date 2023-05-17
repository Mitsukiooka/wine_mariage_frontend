import './stylesheets/Tendency.css';

const Tendency = () => {
  return (
    <div className='index-tendency'>
    <div className='index-tendency-title'>
      <p>Your Tendency</p>
      <div className='tendency-content'>
        <img src='./sample.jpg'></img>
        <ul>
          <li>favorite_kind</li>
          <li>number</li>
          <li>preference</li>
          <li>total_number</li>
        </ul>
      </div>
    </div>
  </div>
  )
};

export default Tendency;