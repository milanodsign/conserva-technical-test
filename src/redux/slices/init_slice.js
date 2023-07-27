import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 1,
  stepConfirm: false,
  personalInfo: {
    name: '',
    email: '',
    phone: '',
  },
  inputErrors: {},
  plan: 1,
  planType: 1,
  selectedPlan: {},
  selectedAddons: [],
};

export const InitSlice = createSlice({
  name: 'init',
  initialState,
  reducers: {
    setStepBack: (state) => {
      state.step = state.step - 1;
    },
    setStepGo: (state) => {
      state.step = state.step + 1;
    },
    setPersonalInfo: (state, action) => {
      const { name, value } = action.payload.target;
      state.personalInfo = { ...state.personalInfo, [name]: value };
    },
    setInputErrors: (state, action) => {
      state.inputErrors = action.payload;
    },
    setPlan: (state, action) => {
      const { selected, item } = action.payload;
      state.plan = selected;
      state.selectedPlan = item;
    },
    setPlanType: (state, action) => {
      state.planType = action.payload;
    },
    setSelectedAddOns: (state, action) => {
      if (state.selectedAddons.some((item) => item.id === action.payload.id)) {
        // Si el item ya está en selectedAddons, lo eliminamos
        state.selectedAddons = state.selectedAddons.filter((item) => item.id !== action.payload.id);
      } else {
        // Si el item no está en selectedAddons, lo agregamos
        state.selectedAddons = [...state.selectedAddons, action.payload];
      }
    },
    setStepConfirm: (state) => {
      state.stepConfirm = true;
    },
  },
});

export const {
  setStepBack,
  setStepGo,
  setPersonalInfo,
  setInputErrors,
  setPlan,
  setPlanType,
  setSelectedAddOns,
  setStepConfirm,
} = InitSlice.actions;

export default InitSlice.reducer;
