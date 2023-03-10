import Header from './Header';
import Body from './Body';


const Contents = () => {
  const obj = { title: 'Wine Mariage' };
  const links = (arg) => <a>{arg}</a>;
  return (
    <>
      <div className="App">
        <Header
        {...obj}
        fn={links}
        ></Header>
        <Body />
      </div>
    </>
  );
};

export default Contents;