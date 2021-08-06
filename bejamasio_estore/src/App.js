import CartNav from './components/CartNav';
import CategoryHeader from './components/CategoryHeader';
import FeaturedProduct from './components/FeaturedProduct';
import FeatureProductAbout from './components/FeatureProductAbout';
import FeatureProductDetails from './components/FeatureProductDetails';
import Header from './components/Header';
import Paginate from './components/Paginate';
import ProductListsSection from './components/ProductListsSection';


function App() {
  return (
        <>     
          <Header/> 
          <CartNav/>
          <FeaturedProduct/>
          <FeatureProductAbout/>
          <FeatureProductDetails/>
          <CategoryHeader/>
          <ProductListsSection/>
          <Paginate/>
        </>
     
    
  );
}

export default App;
