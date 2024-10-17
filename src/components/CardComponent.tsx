// CardComponent.tsx
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Divider, Button } from "@nextui-org/react";
import { formatCountdown } from '../utils/formatCountdown';
import cn from 'classnames';

interface CardProps {
  machine: {
    id: number;
    imageUrl: string;
    isAvailable: boolean;
    countdown: number;
  };
  handleStartMachine: (id: number) => void;
  handleInsertCoin: () => void;
  insertedCoins: number;
  requiredCoins: number;
}

const CardComponent: React.FC<CardProps> = ({ machine, handleStartMachine, handleInsertCoin, insertedCoins, requiredCoins }) => {
  return (
    <Card key={machine.id} className="bg-white shadow-lg p-6 rounded-xl gap-4">
      <CardHeader className="justify-center">
        <h4 className="text-center">Washing Machine #{machine.id}</h4>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col items-center">
        <Image src={machine.imageUrl} alt={`Washing machine ${machine.id}`} className="w-full h-32 lg:h-48 mb-4" />
        <p>{machine.isAvailable ? 'Available' : `Time left: ${formatCountdown(machine.countdown)}`}</p>
        <p>Coins inserted: {insertedCoins} / {requiredCoins}</p>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-center gap-2">
        <Button
          className={cn('px-4 py-2 rounded-lg text-white', {
            'bg-gray-500': !machine.isAvailable,
            'bg-blue-500': machine.isAvailable,
          })}
          onClick={handleInsertCoin}
          disabled={!machine.isAvailable || insertedCoins >= requiredCoins}
        >
          Insert Coin
        </Button>
        <Button
          className={cn('px-4 py-2 rounded-lg text-white', {
            'bg-gray-500': !machine.isAvailable,
            'bg-green-500': machine.isAvailable,
          })}
          disabled={!machine.isAvailable}
          color="primary"
          onClick={() => handleStartMachine(machine.id)}
        >
          {machine.isAvailable ? 'Start' : 'In Use'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
