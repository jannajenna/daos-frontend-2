import React from "react";
import "./LandigPage.module.css";
import { PrimaryButton, SecondaryButton } from "../../components";

const LandingPage: React.FC = () => {
  return (
    <main className="landingContainer">
      <header className="header">
        <h1>Musik Samspil</h1>
        <p className="subHeader">Stedet hvor musikere finder musikere og spiller musik sammen</p>
      </header>
      <section className="loginBox">
        <PrimaryButton label="Opret med e-mail" />
        <p>eller</p>
        <SecondaryButton label="Log ind" />
      </section>
    </main>
  );
};

export default LandingPage;
