// // src/pages/HerrajesPage.jsx
// import { useEffect, useState } from "react";
// import { getHerrajes } from "@/api/api";

// const HerrajesPage = () => {
//   const [herrajes, setHerrajes] = useState([]);

//   useEffect(() => {
//     async function fetchHerrajes() {
//       const data = await getHerrajes();
//       setHerrajes(data);
//     }
//     fetchHerrajes();
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Herrajes</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {herrajes.map((h) => (
//           <div key={h._id} className="border rounded-2xl shadow p-4">
//             <img
//               src={`${import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"}/uploads/${h.imagen}`}
//               alt={h.nombre}
//               className="w-full h-48 object-contain mb-2"
//             />
//             <h2 className="text-lg font-semibold">{h.nombre}</h2>
//             <p className="text-gray-600">{h.descripcion}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HerrajesPage;

import React from 'react'

const herrajes = () => {
  return (
    <div>herrajes</div>
  )
}

export default herrajes