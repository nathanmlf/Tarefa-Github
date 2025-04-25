"use client";

import "./App.css";
import React from "react";

function App() {
  return (
    <>
      <main>
        <div className="container-bg-images">
          <div className="bg-image-1"></div>
          <div className="bg-image-2"></div>
          <div className="bg-image-3"></div>
        </div>

        <div className="main-container">
          <img className="github-logo" src="" alt=""></img>
          <h1 className="main-container-text">Hello!</h1>
        </div>
        <div>
          <input
            className="search-input"
            name="myInput"
            placeholder="Digite um usuário do Github"
          />
          <button className="search-input-button" type="search"></button>
        </div>
      </main>
    </>
  );
}

export default App;


Container código de Erro

<div className="container-erro">
  <p className="container-erro-texto">
    Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente
  </p>
</div>;

Container quando encontra o perfil

<div className="container-encontrou">
  <div className="container-foto-perfil"> 
    <img className="foto-perfil" src="link da foto de perfil">
  </div>
  <div className="container-bio-perfil">
    <h2 className="nome-perfil">Nome da pessoa</h2>
    <p className="bio-perfil">Bio da pessoa</p>
  </div>:
</div>; 
}
