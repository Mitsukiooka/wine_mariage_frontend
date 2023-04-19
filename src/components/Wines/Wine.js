import './stylesheets/Wine.css';

const Wine = ({ wine }) => {
  return (
    <>
      <div className='wines'>
        <img src={wine.imagePath} />
        <ul>
          <li>{wine.name}</li>
          <li>{wine.kind}</li>
          <li>{wine.country}</li>
          <li>{wine.maker}</li>
          <li>{wine.score}</li>
        </ul>
      </div>
    </>
  )
}

export default Wine;