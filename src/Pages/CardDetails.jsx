import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ServicesCardDetails from "./ServicesCardDetails";

const CardDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  // console.log(data,id)
  const [service, setService] = useState({});
  //   console.log(service);

  useEffect(() => {
    const servicesCard = data.find((sId) => sId.serviceId == id);
    setService(servicesCard);
  }, [data, id]);

  return (
    <div>
      <div className="p-10 bg-[#303082]">
        <h1 className="text-[#F7A703] text-3xl font-bold text-center">
          Book Service
        </h1>
      </div>
      <div className="p-3 bg-[#F7A703]"></div>
      <div className="p-3 bg-[#f7a603b7]"></div>
      <div className="p-3 bg-[#f7a6036d]"></div>
      <main>
        <section className="bg-gray-100 py-8">
          <ServicesCardDetails service={service} />
        </section>
      </main>
    </div>
  );
};

export default CardDetails;
