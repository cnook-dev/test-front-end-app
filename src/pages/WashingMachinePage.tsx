import { useDisclosure } from "@nextui-org/react";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendLineNotification } from '../utils/lineNotify';
import { RootState } from '../redux/store';
import {
    startMachine,
    decrementCountdown,
    resetMachine,
    insertCoin,
    setSelectedMachine,
    setCoinModalOpen,
    setTotalCoin
} from '../redux/machineSlice';
import CardComponent from "../components/CardComponent";
import NotificationModalComponent from "../components/NotificationModalComponent";

const WashingMachinePage = () => {
    const machines = useSelector((state: RootState) => state.machines.machines);
    const selectedMachine = useSelector((state: RootState) => state.machines.selectedMachine);
    const coinModalOpen = useSelector((state: RootState) => state.machines.coinModalOpen);
    const totalCoin = useSelector((state: RootState) => state.machines.totalCoin);
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();

    // จำนวนเหรียญที่ต้องหยอดเพื่อใช้งานเครื่องซักผ้า
    const REQUIRED_COINS = 5;

    // Handle countdown for the washing machine
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(decrementCountdown());
        }, 1000);

        return () => clearInterval(interval);
    }, [dispatch]);

    useEffect(() => {
        machines.forEach(machine => {
            if (!machine.isAvailable && machine.countdown === 60) {
                sendLineNotification(`Washing machine ${machine.id} has less than 1 minute remaining.`);
            }
        });
    }, [machines]);

    // Notify when less than 1 second is remaining using Modal
    useEffect(() => {
        machines.forEach(machine => {
            if (!machine.isAvailable && machine.countdown === 0) {
                dispatch(setSelectedMachine(machine.id)); // Store the machine with less than 1 second remaining
                onOpen(); // Open Modal
            }
        });
    }, [dispatch, machines, onOpen]);

    // Reset machine status when time runs out
    useEffect(() => {
        machines.forEach((machine) => {
            if (!machine.isAvailable && machine.countdown === 0) {
                dispatch(resetMachine(machine.id));  // Reset the washing machine status
            }
        });
    }, [machines, dispatch]);

    // Function to handle coin insertion
    const handleInsertCoin = (id: number) => {
        dispatch(insertCoin(id)); // ใช้ action insertCoin เพื่อเพิ่มเหรียญใน Redux state
    };

    // Start the washing machine if the required number of coins is inserted
    const handleStartMachine = (id: number) => {
        const machine = machines.find((m) => m.id === id);
        if (machine && machine.coins >= REQUIRED_COINS) {
            dispatch(startMachine(id));
        } else {
            dispatch(setCoinModalOpen(true));
            dispatch(setTotalCoin(REQUIRED_COINS - (machine?.coins || 0)));
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 py-10 px-4 md:px-10 lg:px-0">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">Washing Machine</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full">
                {machines.map(machine => (
                    <CardComponent
                        key={machine.id}
                        machine={machine}
                        handleStartMachine={handleStartMachine}
                        handleInsertCoin={() => handleInsertCoin(machine.id)} // Pass coin insertion handler
                        insertedCoins={machine.coins} // Display the number of inserted coins
                        requiredCoins={REQUIRED_COINS} // จำนวนเหรียญที่ต้องการ
                    />
                ))}
            </div>

            {/* Modal for notification when less than 1 second is left */}
            <NotificationModalComponent
                isOpen={isOpen}
                onClose={onClose}
                message={`Washing Machine #${selectedMachine} has finished`}
            />

            <NotificationModalComponent
                isOpen={coinModalOpen}
                onClose={() => dispatch(setCoinModalOpen(false))}
                message={`Please insert ${totalCoin} more coins to start the machine.`}
            />
        </div>);
};

export default WashingMachinePage;
