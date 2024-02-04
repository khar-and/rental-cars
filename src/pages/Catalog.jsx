import React, { useEffect } from "react";
import { fetchAllAdverts } from "../api/fetch";
import CarList from "../components/CarList/CarList";
import { useDispatch, useSelector } from "react-redux";
import { setCars } from "../redux/slice";

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.catalog.cars);

  useEffect(() => {
    handleGetCatalog();
  }, []);

  const handleGetCatalog = async () => {
    try {
      const data = await fetchAllAdverts();
      // setCars(data);
      dispatch(setCars(data));
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
