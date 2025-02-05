import React from "react";
import "./Profile.module.css";
import { SecondaryButton } from "../../components";

const ProfilePage: React.FC = () => {
  return (
    <main className="profileContainer">
      <section className="profileInfo">
        <div className="profilePicture"></div>
        <div className="profileDetails">
          <h2 className="profileName">Navn</h2>
          <p className="profileMeta">Musiker · Guitar</p>
        </div>
      </section>
      <SecondaryButton label="Rediger profil" />
      <section className="profileText">
        <h3 className="sectionHeader">Om mig</h3>
        <p>Lorem ipsum dolor sit amet...</p>
      </section>
      <section>
        <h3 className="sectionHeader">Instrumenter</h3>
        <ul className="instrumentList">
          <li className="instrumentItem">
            <span className="instrumentName">Guitar</span>
            <span className="experienceBadge">Expert</span>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default ProfilePage;
