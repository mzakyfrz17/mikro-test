/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState(""); // Tambahkan state untuk desc
  const [phoneNumber, setPhoneNumber] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("address", address);
    formData.append("price", price);
    formData.append("desc", desc); 
    formData.append("phoneNumber", phoneNumber);
    // Tambahkan field desc ke FormData

    try {
      await axios.post("http://localhost:5000/products", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/lapak");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-form p-5 mt-4">
      <h2>Lengkapi data berikut ini</h2>
      <div className="row justify-content-center">
          <form onSubmit={saveProduct}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Product Name"
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="productAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="productAddress"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                id="productPrice"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="productDesc" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="productDesc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Product Description"
              />
            </div>


            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                No Whatsapp
              </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone/WhatsApp Number"/>
            </div>

            <div className="mb-3">
              <label htmlFor="productImage" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                id="productImage"
                onChange={loadImage}
              />
            </div>
  
            {preview && (
              <figure className="image is-128x128">
                <img src={preview} alt="Preview Image" />
              </figure>
            )}
  
            <div className="mb-3">
              <button type="submit" className="btn btn-primer">
                Save
              </button>
            </div>
          </form>
        </div>
    </div>
  );
  
};

export default AddProduct;
