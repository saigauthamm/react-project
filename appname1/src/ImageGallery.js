import React, { useState } from 'react';
import './ImageGallery.css'; // Import the CSS file for styling

function ImageGallery() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages([...images, imageUrl]);
    }
  };

  return (
    <div className="image-gallery">
      <h1>Image Gallery</h1>
      <div className="upload-container">
        <label htmlFor="image-upload" className="upload-label">
          <span className="upload-icon" role="img" aria-label="Upload Image">
            📷
          </span>
          Upload Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          id="image-upload"
          className="upload-input"
        />
      </div>
      <div className="image-container">
        {images.map((imageUrl, index) => (
          <div className="image-item" key={index}>
            <img src={imageUrl} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
