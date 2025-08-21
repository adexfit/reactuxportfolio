import { useState } from "react";
import "./ImageGallery.css";
import withmarkUsdcard from "../assets/graphic/withmarkUsdcard.gif";
import usdAccounts from "../assets/graphic/usd accounts.gif";
import youtube1 from "../assets/graphic/youtube 1.png";
import youtube2 from "../assets/graphic/youtube 2.png";
import youtube3 from "../assets/graphic/youtube 3.png";
import flyer from "../assets/graphic/flyer.jpg";
import bizcard from "../assets/graphic/bizcard.jpg";
import bookfinal from "../assets/graphic/bookfinal.jpg";
import lyfemock from "../assets/graphic/lyfemock.png";
import profile from "../assets/graphic/profile.jpg";
import certificate from "../assets/graphic/certificate.png";
import teckcard from "../assets/graphic/teckcard.jpg";
import cvp from "../assets/graphic/cvp.jpg";
import certificateblue from "../assets/graphic/certificateblue.jpg";
import weddingiv from "../assets/graphic/weddingiv.jpg";
import businesscard from "../assets/graphic/businesscard.jpg";
import appdesign from "../assets/graphic/appdesign.jpg";
import biz5 from "../assets/graphic/biz5.jpg";
import book3 from "../assets/graphic/book3.jpg";
import book1 from "../assets/graphic/book1.jpg";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    withmarkUsdcard,
    usdAccounts,
    flyer,
    bizcard,
    lyfemock,
    profile,
    certificate,
    teckcard,
    cvp,
    certificateblue,
    weddingiv,
    businesscard,
    appdesign,
    biz5,
    book3,
    book1,
    youtube1,
    youtube2,
    youtube3,
    bookfinal,
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            className="gallery-img"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Expanded" />
        </div>
      )}
    </div>
  );
}
