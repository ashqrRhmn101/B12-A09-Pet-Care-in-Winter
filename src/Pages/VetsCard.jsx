import React, { useEffect, useState } from "react";

const VetsCard = () => {
  const [vets, setVets] = useState([]);

  useEffect(() => {
    fetch("/vets.json")
      .then((res) => res.json())
      .then((data) => setVets(data))
      .catch((error) => console.error("Error loading vets:", error));
  }, []);

  return (
    <div className="p-9">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#303082]">
        Meet Our Expert Vets
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {vets.map((vet) => (
          <div
            key={vet.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-5 transition-all duration-300 text-center"
          >
            <img
              src={vet.photo}
              alt={vet.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-blue-100"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {vet.name}
            </h3>
            <p className="text-gray-500 mb-2">{vet.specialty}</p>
            <p className="text-sm text-gray-600">{vet.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VetsCard;
