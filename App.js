import logo from './logo.svg';
import classes from './App.module.css';
import ProductData from './ProductData';

function App(){
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img src =" " alt="Amazon logo"></img> 
        </nav>

      </header>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="product review"/>
        </div>
        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>{ProductData.description}</p>

          <h3 className={classes.ProductImage} src=""></h3>
        </div>
      </div>
    </div>
  );
}

export default App;