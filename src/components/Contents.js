import Header from './Header/Header';
import Top from './Top/Top';
import Index from './Index/Index';


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
        {/* <Top /> */}
        <Index />
      </div>
    </>
  );
};

export default Contents;