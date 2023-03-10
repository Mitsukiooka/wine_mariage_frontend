import Header from './Header/Header';
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
        <Index />
      </div>
    </>
  );
};

export default Contents;