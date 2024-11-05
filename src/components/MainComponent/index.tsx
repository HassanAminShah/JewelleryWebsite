import { addToCart, EmptyCart, RemoveFromCart } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../redux/productAction";
import { useEffect } from "react";
import styled from "styled-components";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.productData);

  useEffect(() => {
    dispatch(productList());
  }, []);

  const StyledDiv = styled.div`
    background: #061725;
  `;
  return (
    <></>
    // <StyledDiv>
    //   <div>
    //     <button onClick={() => dispatch(EmptyCart())}>Empty Cart</button>
    //   </div>
    //   <div className="product-container">
    //     {data.map((item: any) => (
    //       <div key={item.id} className="product-item">
    //         <img width={100} src={item.image} alt="" />
    //         <div>Title : {item.title}</div>
    //         <div>Price : {item.price}</div>
    //         <div>Category : {item.category}</div>
    //         <div>
    //           <button onClick={() => dispatch(addToCart(item))}>
    //             Add To Cart
    //           </button>
    //           <button onClick={() => dispatch(RemoveFromCart(item.id))}>
    //             Remove From Cart
    //           </button>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </StyledDiv>
  );
}

export default Main;
