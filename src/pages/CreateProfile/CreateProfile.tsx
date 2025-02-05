import React from "react";
import "./CreateProfile.module.css";
import { PrimaryButton, TextInput, EmailInput, PasswordInput } from "../../components";

const CreateProfile: React.FC = () => {
  return (
    <main className="createProfileContainer">
      <header className="header">
        <h1>Opret profil</h1>
      </header>
      <form className="formSection">
        <TextInput placeholder="Fulde navn" />
        <EmailInput placeholder="E-mail" />
        <PasswordInput placeholder="Kodeord" />
        <PrimaryButton label="Opret profil" type="submit" />
      </form>
    </main>
  );
};

export default CreateProfile;
