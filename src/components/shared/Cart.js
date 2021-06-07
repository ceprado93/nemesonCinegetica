import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Div, SideDrawer, Text, Row, Col, Anchor, Button, Container, Icon } from "atomize";
import { ShopContext } from "../../context/shopContext";

const Cart = () => {
  const { isCartOpen, closeCart, checkout, deleteItemFromCheckout, product, products, addItemToCheckout } =
    useContext(ShopContext);
  let [quan, setQuan] = useState(1);

  function addItemstoCart(products, item) {
    products.map((elm) => {
      if (elm.title === item.title) {
        console.log(products, item);
        let newQuan = 1;
        let newQuanState = quan + 1;
        setQuan(newQuanState);
        addItemToCheckout(elm.variants[0].id, newQuan);
      }
    });
  }

  function removeItemsFromCart(products, item) {
    if (quan > 0) {
      products.map((elm) => {
        if (elm.title === item.title) {
          console.log(products, item);
          let minusQuan = -1;
          let minusQuanState = quan - 1;
          setQuan(minusQuanState);
          addItemToCheckout(elm.variants[0].id, minusQuan);
        }
      });
    } else {
      setQuan(0);
    }
  }

  function deleteProduct(checkout, item) {
    console.log(checkout.lineItems);
    checkout.lineItems.map((elm, idx) => {
      if (elm.title === item.title) {
        deleteItemFromCheckout(elm.id);
      }
    });
  }

  if (checkout.lineItems) {
    return (
      <SideDrawer isOpen={isCartOpen} onClose={closeCart} id="cart__page">
        <Container d="flex" flexDir="column" h="100%">
          <Row justify="space-between" border={{ b: "1px solid" }} p="0.7rem" borderColor="gray300">
            <Text tag="h1" textColor="black500" textSize="paragraph" hoverTextColor="black700" transition="0.3s">
              Carrito
            </Text>
            <Anchor onClick={() => closeCart()}>
              <Icon name="Cross" color="black500" />
            </Anchor>
          </Row>
          <Row flexGrow="2" p="0.7rem" overflow="auto" flexWrap="nowrap" flexDir="column">
            {checkout.lineItems.length < 1 ? (
              <Row>
                <Col>
                  <Text tag="h1" textColor="black500" textSize="paragraph" hoverTextColor="black700" transition="0.3s">
                    El carrito está vacío
                  </Text>
                </Col>
              </Row>
            ) : (
              <>
                {checkout.lineItems &&
                  checkout.lineItems.map((item, idx) => (
                    <Row key={item.id} p={{ t: "5px" }} className="cart__line">
                      <Col>
                        <Div bgImg={item.variant.image.src} bgSize="cover" bgPos="center" h="5rem" w="4rem" />
                      </Col>
                      <Col>
                        <Text>{item.title}</Text>
                      </Col>
                      <Col>
                        <div className="cart__itemList">
                          <button className="cart__button" onClick={() => removeItemsFromCart(products, item)}>
                            -
                          </button>
                          <Text>{item.quantity}</Text>
                          <button className="cart__button" onClick={() => addItemstoCart(products, item)}>
                            +
                          </button>
                        </div>
                      </Col>
                      <Col>
                        <Text className="cart__totalPrice" maxLength="11">
                          {(item.variant.price * item.quantity).toFixed(2)}€
                        </Text>
                        <button className="delete_image" onClick={() => deleteProduct(checkout, item)}>
                          X
                        </button>
                      </Col>
                    </Row>
                  ))}
              </>
            )}
          </Row>
          <Row border={{ t: "1px solid" }} p="0.7rem" borderColor="gray300">
            <Anchor w="100%" href={checkout.webUrl} target="_blank" rel="noopener noreferrer">
              <Button
                w="100%"
                rounded="0"
                bg="black500"
                shadow="2"
                className="hero_link"
                hoverShadow="3"
                m={{ t: "1rem" }}
              >
                FINALIZAR PEDIDO
              </Button>
            </Anchor>
          </Row>
        </Container>
      </SideDrawer>
    );
  }

  return null;
};

export default Cart;
