import React, { useState } from "react";
import CryptoList from "./components/CryptoList";
import CryptoDetails from "./components/CryptoDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/styles.css";

const App = () => {
  const [selectedCryptoId, setSelectedCryptoId] = useState(null);

  const handleGoBack = () => {
    setSelectedCryptoId(null); 
  };

  return (
    <div className="app">
      <Header />
      <main>
        {selectedCryptoId ? (
          <CryptoDetails selectedCryptoId={selectedCryptoId} onGoBack={handleGoBack} />
        ) : (
          <CryptoList onCryptoSelect={setSelectedCryptoId} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
