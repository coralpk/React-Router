import { useState } from "react";

export default function Doggo() {
  const [imgLink, setImgLink] = useState(null);

  const getDogs = () => {
    // Add the hardcoded gif link
    setImgLink("https://i.giphy.com/media/xT9DPldJHzZKtOnEn6/giphy.webp");
  };

  const fetchNewDogImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((data) => data.json())
      .then((dog) => {
        console.log(dog.message);
        setImgLink(dog.message);
      });
  };

  return (
    <div className="dog-box">
      {imgLink && (
        <div className="doggy">
          <img src={imgLink} alt="doggy" />
        </div>
      )}
      <h2>Click for some cuteness!</h2>
      <div className="btns">
        <button className="hide" onClick={getDogs}>
          Woff
        </button>
        <button className="btn" onClick={fetchNewDogImage}>
          Doggo
        </button>
      </div>
    </div>
  );
}
