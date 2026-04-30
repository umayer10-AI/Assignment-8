import React from 'react';

const Breeds = () => {
  const breeds = [
    {
      id: 1,
      name: "Brahman",
      origin: "USA/Bangladesh",
      image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=400", // Placeholder image
      tag: "Meat King"
    },
    {
      id: 2,
      name: "Sahiwal",
      origin: "Pakistan/India",
      image: "https://images.unsplash.com/photo-1545468843-27289b05af9f?auto=format&fit=crop&q=80&w=400",
      tag: "Heavy Weight"
    },
    {
      id: 3,
      name: "Gir",
      origin: "India/Gujarat",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=400",
      tag: "Premium Choice"
    },
    {
      id: 4,
      name: "Mirkadim",
      origin: "Bangladesh",
      image: "https://images.unsplash.com/photo-1527153358354-663bd9cc6c28?auto=format&fit=crop&q=80&w=400",
      tag: "Local Pride"
    }
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-2">Qurbani Top Breeds</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600">Select the best quality breeds for your sacrifice</p>
        </div>

        {/* Breed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {breeds.map((breed) => (
            <div key={breed.id} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <figure className="px-4 pt-4 overflow-hidden">
                <img 
                  src={breed.image} 
                  alt={breed.name} 
                  className="rounded-xl h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </figure>
              <div className="card-body items-center text-center">
                <div className="badge badge-secondary mb-2">{breed.tag}</div>
                <h3 className="card-title text-2xl font-bold">{breed.name}</h3>
                <p className="text-sm text-gray-500 font-medium italic">Origin: {breed.origin}</p>
                <div className="card-actions mt-4">
                  <button className="btn btn-primary btn-sm rounded-full">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Breeds;