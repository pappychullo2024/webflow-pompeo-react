import { useContext } from "react";
import PostContext from "./PostContext";
import InputElement from "./InputElement";

function Input() {
  const { cartItems } = useContext(PostContext);
  return (
    <div>
      {cartItems.map((item) => (
        <InputElement key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Input;
