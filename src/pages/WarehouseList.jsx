import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setWarehouses } from '../store/warehouseSlice';
import warehouseData from '../warehouses.json'; // Import the JSON file directly
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function WarehouseList() {
  const dispatch = useDispatch();
  const warehouses = useSelector((state) => state.warehouse.warehouses);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ city: '', cluster: '', spaceAvailable: '' });
  const [cities, setCities] = useState([]);
  const [clusters, setClusters] = useState([]);

  useEffect(() => {
    dispatch(setWarehouses(warehouseData)); // Use the imported data
    // Extract unique cities and clusters from the data
    const uniqueCities = [...new Set(warehouseData.map(w => w.city))];
    const uniqueClusters = [...new Set(warehouseData.map(w => w.cluster))];
    setCities(uniqueCities);
    setClusters(uniqueClusters);
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredWarehouses = warehouses.filter(warehouse => 
    warehouse.name.toLowerCase().includes(search.toLowerCase()) &&
    (filters.city === '' || warehouse.city === filters.city) &&
    (filters.cluster === '' || warehouse.cluster === filters.cluster) &&
    (filters.spaceAvailable === '' || warehouse.space_available >= parseInt(filters.spaceAvailable, 10))
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Warehouse List</h1>
      <div className="mb-6">
        <input 
          type="text" 
          placeholder="Search by name" 
          value={search}
          onChange={handleSearchChange}
          className="p-2 border border-gray-300 rounded-lg w-full mb-4"
        />
        <div className="flex space-x-4 mb-4">
          <select 
            name="city" 
            onChange={handleFilterChange} 
            value={filters.city}
            className="p-2 border border-gray-300 rounded-lg w-full"
          >
            <option value="">Select City</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          <select 
            name="cluster" 
            onChange={handleFilterChange} 
            value={filters.cluster}
            className="p-2 border border-gray-300 rounded-lg w-full"
          >
            <option value="">Select Cluster</option>
            {clusters.map(cluster => (
              <option key={cluster} value={cluster}>{cluster}</option>
            ))}
          </select>
        </div>
        <input 
          type="number" 
          name="spaceAvailable"
          placeholder="Min space available"
          value={filters.spaceAvailable}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-lg w-full"
        />
      </div>
      <div className="relative">
        <Slider {...sliderSettings}>
          {filteredWarehouses.length > 0 ? (
            filteredWarehouses.map(warehouse => {
              const imagePath = `/images/${warehouse.image}`; // Use the image path from JSON

              return (
                <motion.div 
                  key={warehouse.id} 
                  className="p-4 border border-gray-200 rounded-lg shadow-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={`/details/${warehouse.id}`}>
                    <div className="flex flex-col items-center">
                      <img 
                        src={imagePath} // Use the image path from JSON
                        alt={warehouse.name}
                        className="w-100 h-80 object-cover mb-4 rounded-lg"
                      />
                      <h2 className="text-xl font-semibold">{warehouse.name}</h2>
                    </div>
                  </Link>
                </motion.div>
              );
            })
          ) : (
            <motion.div 
              className="p-4 border border-gray-200 rounded-lg shadow-md text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              No warehouses found
            </motion.div>
          )}
        </Slider>
      </div>
    </div>
  );
}

export default WarehouseList;
