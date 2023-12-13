import "../style/style.css";
import NavigasiBaru from '../components/NavigasiBaru';
import ProductList from "../components/Lapak-list";
import Footer from '../components/Footer';

function Lapak() {
  return (
    <div>
      <NavigasiBaru/>
      <ProductList/>
      <Footer/>
      
    </div>
  );
}

console.log('lapak list disini');

export default Lapak;