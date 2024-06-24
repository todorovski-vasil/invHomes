import { configureStore } from '@reduxjs/toolkit';
// import propertiesReducer from '../features/properties/propertySlice';

export const store = configureStore({
  reducer: {
    // properties: propertiesReducer,
  },
});
