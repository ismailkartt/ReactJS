import React from 'react'
import naturalPhoto from "../../assets/img/image2.jpg";

const Image = () => {
  return (
    <div>

        {/* External url veya CDN*/}
        <img src="https://plus.unsplash.com/premium_photo-1720760946886-286458e746ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D" alt="" />

        {/* Statik yöntemde görüntüler public klasörü içerisinde aranır */}
        <img src="assets/img/image1.jpg" alt="" />

        {/* Import ve require yöntemde dosyalar src içinde olmalıdır */}
        <img src={naturalPhoto} alt="" width="300" />

        <img src={require("../../assets/img/image3.jpg")} alt="" width="300" />

    </div>
  )
}

export default Image