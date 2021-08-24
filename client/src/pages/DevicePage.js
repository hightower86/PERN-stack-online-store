import React from "react";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "Телевизор Samsung-1",
    price: 15400,
    rating: 5,
    img: "https://source.unsplash.com/400x300/?samsung,tv",
  };
  return (
    <div>
      <h2>{device.name}</h2>
      <img src={device.img} alt={device.name} height={200} width={200} />
      <p>
        price: <span>{device.price}</span>
      </p>
    </div>
  );
};

export default DevicePage;
