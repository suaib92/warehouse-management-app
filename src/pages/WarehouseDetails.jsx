import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { setSelectedWarehouse } from '../store/warehouseSlice';

function WarehouseDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const warehouse = useSelector((state) => state.warehouse.warehouses.find(w => w.id === parseInt(id)));
  const [formState, setFormState] = useState(warehouse || {});

  useEffect(() => {
    if (warehouse) {
      setFormState(warehouse);
    }
  }, [warehouse]);

  const handleAddCustomField = () => {
    const field = prompt('Enter custom field name');
    if (field) {
      // Add custom field logic here if needed
      // For display only, you may want to add custom fields directly to the state or use a different approach
      alert('Custom field added: ' + field);
    }
  };

  // Construct image path
  const imagePath = `/images/${formState.image}`;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2 border-gray-300">Warehouse Details</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Warehouse Information</h2>
        <div className="space-y-2">
          <p><strong className="text-gray-600">Name:</strong> {formState.name}</p>
          <p><strong className="text-gray-600">Cluster:</strong> {formState.cluster}</p>
          <p><strong className="text-gray-600">City:</strong> {formState.city}</p>
          <p><strong className="text-gray-600">Space Available:</strong> {formState.space_available}</p>
          <p><strong className="text-gray-600">Status:</strong> {formState.is_live ? 'Live' : 'Not Live'}</p>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Warehouse Image</h2>
        {formState.image && (
          <img
            src={imagePath} // Use the image path from state
            alt={formState.name}
            className="w-full h-auto object-cover rounded-lg"
          />
        )}
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Custom Fields</h2>
        <ul className="list-disc list-inside">
          {(formState.customFields || []).map((field, index) => (
            <li key={index} className="text-gray-800">{field}</li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-4">
        <button 
          onClick={() => navigate('/')} 
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Back to List
        </button>
        <button 
          onClick={handleAddCustomField} 
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Add Custom Field
        </button>
      </div>
    </div>
  );
}

export default WarehouseDetails;
