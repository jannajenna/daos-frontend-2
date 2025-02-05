import React from "react";
import "./EditProfile.module.css";
import { PrimaryButton, TextInput } from "../../components";

const EditProfile: React.FC = () => {
  return (
    <main className="editProfileContainer">
      <header className="header">
        <h1>Rediger profil</h1>
      </header>
      <section className="profilePictureSection">
        <div className="profilePicture"></div>
        <p>Upload et nyt billede</p>
      </section>
      <form className="formSection">
        <TextInput placeholder="Fulde navn" />
        <PrimaryButton label="Gem ændringer" type="submit" />
      </form>
    </main>
  );
};

export default EditProfile;
