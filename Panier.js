import React, { useEffect, useState } from "react";

const Panier = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("dmarket-cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("dmarket-cart", JSON.stringify(updated));
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) return <p>Votre panier est vide.</p>;

  return (
    <div>
      <h2>Panier</h2>
      {cart.map(({ id, name, price }) => (
        <div key={id} style={{ marginBottom: 15 }}>
          <span>{name} - {price} €</span>
          <button style={{ marginLeft: 10 }} onClick={() => removeItem(id)}>Supprimer</button>
        </div>
      ))}
      <h3>Total : {total} €</h3>
    </div>
  );
};

export default Panier;
        
