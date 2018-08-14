import React from 'react';
import { connect } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  removeAllFromCart,
} from '../../actions/cartActions';
import { Button, CardImg } from 'reactstrap';

const sort = items => {
  return items.sort((a, b) => a.id < b.id);
};

const Cart = props => {
  let subTotals = [];

  props.cart.map(item => {
    subTotals.push(item.quantity * item.price);
  });

  return props.cart.length ? (
    <div>
      <div className="item-count">
        <span>Item(s) in cart: </span>
        <span className="count-meter">{props.cart.length}</span>
      </div>

      <div className="grand-total">
        <span>Grand Total $(USD): </span>
        <span className="total-amount">
          {subTotals.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
          )}
        </span>
      </div>
      <table>
        <thead>
          <tr>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {sort(props.cart).map(item => (
            <tr key={item.id}>
              <td>
                <CardImg
                  top
                  width="50%"
                  src={process.env.PUBLIC_URL + `/img/${item.image}`}
                  alt={item.name}
                />
                {item.name} ({item.quantity})
              </td>
              <td>
                <Button color="success" onClick={e => props.addToCart(item)}>
                  +
                </Button>
                <Button
                  color="danger"
                  onClick={e => props.removeFromCart(item)}
                >
                  -
                </Button>
              </td>
              <td>
                <Button
                  color="danger"
                  onClick={e => props.removeAllFromCart(item)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div>There is nothing in cart!</div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};
export default connect(
  mapStateToProps,
  { addToCart, removeFromCart, removeAllFromCart },
)(Cart);
