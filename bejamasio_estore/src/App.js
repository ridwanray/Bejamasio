import CartBox from './components/CartBox';
import CategoryHeader from './components/CategoryHeader';
import FeaturedProduct from './components/FeaturedProduct';
import FeatureProductAbout from './components/FeatureProductAbout';
import FeatureProductDetails from './components/FeatureProductDetails';
import Header from './components/Header';
import ProductListsSection from './components/ProductListsSection';


function App() {
  return (
        <>     
          <Header/> 
          <CartBox/>
          <FeaturedProduct/>
          <FeatureProductAbout/>
          <FeatureProductDetails/>
          <CategoryHeader/>
          <ProductListsSection/>
        </>
     
    
  );
}

export default App;
