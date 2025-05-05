import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'; // Para acessar o estado global do Redux
import './SuperCoin.css'; // Importando o CSS para o componente SuperCoin


const SuperCoin = () => {
  const cartItems = useSelector(state => state.cart.cartItems); // Obtendo os itens do carrinho do Redux
  const [superCoins, setSuperCoins] = useState(0); // Inicializando as super moedas com 0

  // Calculando o total do carrinho
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Atualizando as super moedas com base no totalAmount
  useEffect(() => {
    if (totalAmount >= 100 && totalAmount < 200) {
      setSuperCoins(10); // 10 super coins para compras entre 100 e 199
    } else if (totalAmount >= 200 && totalAmount < 300) {
      setSuperCoins(20); // 20 super coins para compras entre 200 e 299
    } else if (totalAmount >= 300) {
      setSuperCoins(30); // 30 super coins para compras acima de 300
    } else {
      setSuperCoins(0); // Se o total for abaixo de 100, não há super coins
    }
  }, [totalAmount]); // A lógica executa sempre que o totalAmount mudar

  return (
    <div className="super-coins" style={{ textAlign: 'center' }}>
      <h2 className="super-coins-title">Super Coins</h2>
      <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
    </div>
  );
};

export default SuperCoin;
