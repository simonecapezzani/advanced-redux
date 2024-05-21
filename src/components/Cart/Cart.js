import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

  const cartItems = useSelector(state => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((prod) => {
        
        console.log(prod.id);
        
        return <CartItem
            key={prod.id}
            item={{
              id: prod.id,
              title: prod.name,
              quantity: prod.quantity,
              total: prod.totalPrice,
              price: prod.price
            }}
          />
        })}
      </ul>
    </Card>
  );
};

export default Cart;
