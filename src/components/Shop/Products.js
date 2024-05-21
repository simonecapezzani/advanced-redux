import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 'p1', price: 6, title: 'My First product', description: 'The first book I ever wrote' },
  { id: 'p2', price: 2, title: 'My Second product', description: 'The second book I ever wrote' },
  { id: 'p3', price: 9, title: 'My Third product', description: 'The third book I ever wrote' }
];


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((prod) => {
          return <ProductItem
            title={prod.title}
            price={prod.price}
            description={prod.description}
          />
        })}
      </ul>
    </section>
  );
};

export default Products;
