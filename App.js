import React, { Component } from 'react';
import classes from './App.module.css';
import ProductData from './utils/ProductData';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';

class App extends Component {
  state = {
    ProductData: ProductData,
    currentPreviewImage: 'https://imgur.com/PTgQlim.png',
    showHeartBeatSection: false,
  }
  
  render() {
    return (
      <div className="App">
       <Topbar />
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.currentPreviewImage} showHeartBeatSection={this.state.showHeartBeatSection} />
          </div>
        <div className={classes.ProductData}>
            <ProductDetails data = {this.state.ProductData} />
        </div>
        </div>
      </div>
    );

  }
 
 
}

export default App;