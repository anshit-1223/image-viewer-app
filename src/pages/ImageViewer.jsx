import React, { useState } from 'react'
import './ImageViewer.css';

const imageUrls = [
    'https://images.unsplash.com/photo-1652946998511-41f80a8096ff?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1627821549647-26689ff539bd?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=1200&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1200&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1648343332799-0f4a872f2ed8?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1573847792062-9292df56ebb4?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1675705690586-3d35326e4771?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1674929041876-8c58c0a3f772?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
];

function ImageViewer() {
    const [image, setImage] = useState("https://images.unsplash.com/photo-1652946998511-41f80a8096ff?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

    const [border, setBorder] = useState("none");
    const handleImageClick = (img) => {
        setImage(img);
    };
    return (
        <>
            <div className="container-fluid div1">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <img className='img-fluid' src={image} alt="No Image Available" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="image-gallery">
                            {imageUrls.map((url, index) => (

                                <img key={index} src={url} onClick={() => handleImageClick(url)} alt="" />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageViewer
