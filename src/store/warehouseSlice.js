import { createSlice } from '@reduxjs/toolkit';

const warehouseSlice = createSlice({
  name: 'warehouse',
  initialState: {
    warehouses: [],
    selectedWarehouse: null,
  },
  reducers: {
    setWarehouses(state, action) {
      state.warehouses = action.payload;
    },
    setSelectedWarehouse(state, action) {
      state.selectedWarehouse = action.payload;
    },
    updateWarehouse(state, action) {
      const index = state.warehouses.findIndex(w => w.id === action.payload.id);
      if (index !== -1) {
        state.warehouses[index] = action.payload;
      }
    },
    addCustomField(state, action) {
      const warehouse = state.warehouses.find(w => w.id === action.payload.id);
      if (warehouse) {
        warehouse.customFields = [...(warehouse.customFields || []), action.payload.field];
      }
    },
  },
});

export const { setWarehouses, setSelectedWarehouse, updateWarehouse, addCustomField } = warehouseSlice.actions;
export default warehouseSlice.reducer;
