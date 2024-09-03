import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const {currentUser} =useContext(AuthContext)
  console.log(currentUser);
  
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find  D Real State & Get Your Dream Place</h1>
          <p>
          Real estate is a type of real property, but the two terms have different meanings. Real property includes the physical property of real estate, but it also includes a bundle of ownership and usage rights. This distinction is important in the real estate world, where different ideas might apply to owners versus renters or leasers
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>1+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;