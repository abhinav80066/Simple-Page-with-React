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

          <h3 className={classes.SectionHeading}> Select Color</h3>
          <div>
            <img className={[classes.ProductImage, classes.SelectProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black Colored Watch" />
            <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red Colored Watch" />
            <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Colored Watch" />
            <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Colored Watch" />
          </div>

          <h3 className={classes.SectionHeading}> Features</h3>
          <div>
            <button className={[classes.FeatureItem, classes.SelectFeatureItem].join(' ')}>Time</button>
            <button className={classes.FeatureItem}>Heart Rate</button>
          </div>

          <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;