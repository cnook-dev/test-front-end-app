import { Chip } from "@nextui-org/react";
import { sortNumbersByFrequencyAndValue } from "../utils/sortNumbersByFrequencyAndValue";

const NumbersPage = () => {
    const Numbers = [2, 3, 4, 4, 34, 6, 7, 2, 3, 7, 8, 8, 8, 7, 9, 10, 41, 8];
    const inputNumbers = [2, 3, 4, 4, 34, 6, 7, 2, 3, 7, 8, 8, 8, 7, 9, 10, 41, 8];
    const sortedNumbers = sortNumbersByFrequencyAndValue(inputNumbers);
    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 py-10 px-4 md:px-10 lg:px-0">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">Sorted Numbers</h1>
            <div className="gap-4  flex flex-col">
                <div className="p-6 md:p-10 bg-white rounded-lg shadow-lg w-full max-w-5xl">
                    <h2 className="text-center text-md sm:text-lg font-bold mb-6">Before</h2>
                    <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                        {Numbers.map((num: number, index: number) => (
                            <Chip
                                key={index}
                                variant="flat"
                                className="bg-blue-100 text-blue-800 border-none hover:bg-blue-200 transition-all"
                            >
                                {num}
                            </Chip>
                        ))}
                    </div>
                </div>
                <div className="p-6 md:p-10 bg-white rounded-lg shadow-lg w-full max-w-5xl">
                    <h2 className="text-center text-md sm:text-lg font-bold mb-6">After</h2>
                    <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                        {sortedNumbers.map((num: number, index: number) => (
                            <Chip
                                key={index}
                                variant="flat"
                                className="bg-blue-100 text-blue-800 border-none hover:bg-blue-200 transition-all"
                            >
                                {num}
                            </Chip>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumbersPage;
