import { useState } from "react";
import PostContext from "./PostContext";

const intialItems = [
  {
    name: "Blue Plate",
    price: 65.0,
    image: "blueplate.png",
    category: "Plates",
    id: 218827,
  },
  {
    name: "White Potterys",
    price: 115.0,
    image: "whitepotterys.png",
    category: "Vases",
    id: 23456347,
  },

  {
    name: "Wine Pottery",
    price: 95.0,
    image: "winepottery.png",
    category: "Vases",
    id: 23422347,
  },

  {
    name: "White Cup",
    price: 55.0,
    image: "whitecup.png",
    category: "Mugs",
    id: 23136347,
  },

  {
    name: "Red Platte",
    price: 115.0,
    image: "redplatte.png",
    category: "Plates",
    id: 23999889,
  },

  {
    name: "Wine Bowl",
    price: 115.0,
    image: "winebowl.png",
    category: "Vases",
    id: 23198347,
  },

  {
    name: "Gray Cup",
    price: 65.0,
    image: "graycup.png",
    category: "Mugs",
    id: 53198347,
  },

  {
    name: "Decor Plate",
    price: 65.0,
    image: "decor.png",
    category: "Plates",
    id: 234567,
  },

  {
    name: "Mint Pottery",
    price: 75.0,
    image: "mint.png",
    category: "Vases",
    id: 234568,
  },
  {
    name: "Set Of Potterys",
    price: 125.0,
    image: "set.png ",
    category: "Vases",
    id: 234589,
  },

  {
    name: "Orange Ceramic",
    price: 55.0,
    image: "orange.png",
    category: "Vases",
    id: 234456,
  },
  {
    name: "Dark Bowl",
    price: 115.0,
    image: "dark.png ",
    category: "Vases",
    id: 232436,
  },

  {
    name: "Square Pottery",
    price: 75.0,
    image: "square.png ",
    category: "Vases",
    id: 231236,
  },

  {
    name: "Torquers Vase",
    price: 95.0,
    image: "torquersvazee.png ",
    category: "Mugs",
    id: 401236,
  },

  {
    name: "Black Pottery",
    price: 115.0,
    image: "blackpottery.png ",
    category: "Vases",
    id: 4012986,
  },

  {
    name: "Silver pottery",
    price: 100.0,
    image: "silverpottery.png ",
    category: "Vases",
    id: 4812986,
  },
  {
    name: "Mint Bowl",
    price: 115.0,
    image: "mintbowl.png ",
    category: "Vases",
    id: 48102986,
  },

  {
    name: "Gold & Black Pottery",
    price: 95.0,
    image: "goldblack.png ",
    category: "Vases",
    id: 4455986,
  },

  {
    name: "Orange Plate",
    price: 65.0,
    image: "orangeplate.png ",
    category: "Plates",
    id: 4375986,
  },

  {
    name: "Red Ceramic",
    price: 45.0,
    image: "redceramic.png ",
    category: "Vases",
    id: 43759756,
  },
];

function ContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [items, setItems] = useState(intialItems);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCart, setIsLoadingCart] = useState(false);
  const totalPrice = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);
  const plateItems = items.filter((item) => item.category === "Plates");
  const vasesItems = items.filter((item) => item.category === "Vases");
  const mugsItems = items.filter((item) => item.category === "Mugs");

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setIsLoadingCart(true);
    setTimeout(() => {
      setIsLoadingCart(false);
      setIsOpen(true);
    }, 2000);
  };

  function handleQuantityChange(id, quantity) {
    setIsLoading(true);

    setTimeout(() => {
      setCartItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
      setIsLoading(false);
    }, 2000);
  }

  function handleIsOpen() {
    setIsOpen(true);
    setMenuOpen(false);
  }

  function handleMenuClose() {
    setMenuOpen(false);
  }

  function handleIsClose() {
    setIsOpen(false);
  }

  function removeFromCart(id) {
    setIsLoading(true);
    setTimeout(() => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
      setIsLoading(false);
    }, 2000);
  }

  function onToggle() {
    setMenuOpen(!menuOpen);
  }

  const contextValue = {
    items,
    isOpen,
    handleIsOpen,
    handleIsClose,
    setItems,
    handleAddToCart,
    removeFromCart,
    cartItems,
    handleQuantityChange,
    totalPrice,
    isLoading,
    isLoadingCart,
    plateItems,
    vasesItems,
    mugsItems,
    menuOpen,
    onToggle,
    handleMenuClose,
  };
  return <PostContext value={contextValue}>{children}</PostContext>;
}

export default ContextProvider;
