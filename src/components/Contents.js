import Header from './Header/Header';
import Index from './Index/Index';
import Wines from './Wines/Wines';


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
        {/* <Index /> */}
        <Wines />
      </div>
    </>
  );
};

export default Contents;