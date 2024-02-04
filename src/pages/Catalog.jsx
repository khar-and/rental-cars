import React, { useEffect, useState } from "react";
import { fetchAllAdverts } from "../api/fetch";
import CarList from "../components/CarList/CarList";

const Catalog = () => {
  const [cars, setCars] = useState([]);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    handleGetCatalog();
  }, []);

  // const handleLoadMore = () => {
  //   const nextPage = page + 1;
  //   setPage(nextPage);
  // };

  const handleGetCatalog = async () => {
    try {
      const data = await fetchAllAdverts();
      // const visible = data.slice((page - 1) * 12, page * 12);
      // setCars((prevCars) => [...prevCars, ...visible]);
      setCars(data);
    } catch {
      alert("Something wrong");
    }
  };

  return (
    <div>
      <CarList cars={cars} />
    </div>
  );
};

export default Catalog;
