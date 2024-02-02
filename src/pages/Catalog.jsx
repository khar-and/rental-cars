import React, { useEffect, useState } from "react";
import { fetchAllAdverts } from "../api/fetch";
import CarList from "../components/CarList/CarList";

const Catalog = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    handleGetCatalog();
  }, []);

  const handleGetCatalog = async () => {
    try {
      const data = await fetchAllAdverts();
      setCars(data);
    } catch {
      alert("Somethung wrong");
    }
  };

  return (
    <div>
      <CarList cars={cars} />
    </div>
  );
};

export default Catalog;
