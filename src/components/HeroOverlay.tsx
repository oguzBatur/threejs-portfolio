import React from "react";

function HeroOverlay() {
  return (
    <div style={{ position: "absolute", top: '40vh', right: '10vw' }}>
      <h1 style={{fontSize: 50}}>Merhaba, Benim Adım Batur.</h1>
      <p style={{fontSize: 25, textAlign: 'end'}} >Yazılım ile uğraşmak benim tutkum.</p>
    </div>
  );
}

export default HeroOverlay;
