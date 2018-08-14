import React from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
} from 'reactstrap';

const ProductListItem = props => (
  <Col sm="4">
    <Card body className="text-center">
      <CardImg
        top
        width="100%"
        src={process.env.PUBLIC_URL + `/img/${props.product.image}`}
        alt={props.product.name}
      />

      <CardTitle>{props.product.name}</CardTitle>
      <CardSubtitle>${props.product.price}</CardSubtitle>
      <Button color="success" onClick={() => props.addToCart(props.product)}>
        Add to cart ({(props.cartItem && props.cartItem.quantity) || 0})
      </Button>

      {props.cartItem ? (
        <Button
          color="danger"
          onClick={() => props.removeFromCart(props.cartItem)}
        >
          Remove
        </Button>
      ) : null}
    </Card>
  </Col>
);

export default ProductListItem;
