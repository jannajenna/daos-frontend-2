import React from "react";
import"../../index.css"
import styles from "./LandigPage.module.css";
import { PrimaryButton, SecondaryButton } from "../../components";

const LandingPage: React.FC = () => {
  return (
    <main className="landingContainer">
      <header className="header">
        <h1 className={`${styles.header}`}>Musik Samspil</h1>
        <h1 className="h1-red">Stedet hvor musikere finder musikere og spiller musik sammen</h1>
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
