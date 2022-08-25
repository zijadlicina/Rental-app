import React from 'react'
import "./ImagesGallery.css"

function ImagesGallery() {
  return (
    <div className="div-images">
      <div className="side-image">
        <div className="fakeImg">Left Image</div>
      </div>
      <div className="main-image">
        <div className="fakeImg">Main Image</div>
      </div>
      <div className="side-image">
        <div className="fakeImg">Right Image</div>
      </div>
    </div>
  );
}

export default ImagesGallery