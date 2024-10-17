import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Machine {
  id: number;
  isAvailable: boolean;
  countdown: number;
  imageUrl: string;
  coins: number;
}

interface MachinesState {
  machines: Machine[];
  selectedMachine: number | null;
  coinModalOpen: boolean;
  totalCoin: number | null;
}


const initialState: MachinesState = {
  machines: [
    { id: 1, isAvailable: false, countdown: 3, imageUrl: "/images/clothes_washing_machine_wash_icon.svg", coins: 5 },
    { id: 2, isAvailable: false, countdown: 61, imageUrl: "/images/clothes_washing_machine_wash_icon.svg", coins: 5 },
    { id: 3, isAvailable: true, countdown: 0, imageUrl: "/images/clothes_washing_machine_wash_icon.svg", coins: 0 },
  ],
  selectedMachine: null,
  coinModalOpen: false,
  totalCoin: null,
};

export const machineSlice = createSlice({
  name: 'machines',
  initialState,
  reducers: {
    startMachine: (state, action: PayloadAction<number>) => {
      const machine = state.machines.find((m) => m.id === action.payload);
      if (machine) {
        machine.isAvailable = false;
        machine.countdown = 61;
      }
    },
    decrementCountdown: (state) => {
      state.machines.forEach((machine) => {
        if (!machine.isAvailable && machine.countdown > 0) {
          machine.countdown -= 1;
        }
      });
    },
    resetMachine: (state, action: PayloadAction<number>) => {
      const machine = state.machines.find((m) => m.id === action.payload);
      if (machine) {
        machine.isAvailable = true;
        machine.countdown = 0;
        machine.coins = 0;
      }
    },
    insertCoin: (state, action: PayloadAction<number>) => {
      const machine = state.machines.find((m) => m.id === action.payload);
      if (machine) {
        machine.coins += 1;
      }
    },
    setSelectedMachine: (state, action: PayloadAction<number | null>) => {
      state.selectedMachine = action.payload;
    },
    setCoinModalOpen: (state, action: PayloadAction<boolean>) => {
      state.coinModalOpen = action.payload;
    },
    setTotalCoin: (state, action: PayloadAction<number | null>) => {
      state.totalCoin = action.payload;
    }
  },
});

export const {
  startMachine,
  decrementCountdown,
  resetMachine,
  insertCoin,
  setSelectedMachine,
  setCoinModalOpen,
  setTotalCoin
} = machineSlice.actions;

export default machineSlice.reducer;
