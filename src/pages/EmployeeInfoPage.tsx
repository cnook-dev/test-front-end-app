/* import { getEmployeeInfo } from "../utils/getEmployeeInfo";
import React from "react";

const EmployeeInfoPage = () => {
    const employees = [
        { name: 'Arm', position: 'Front End' },
        { name: 'Game', position: 'Back End' }
    ];
    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 py-10 px-4 md:px-10 lg:px-0">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">Employee Information</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full">
                {employees.map((employee, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                            {employee.name}
                        </h4>
                        <p className="text-gray-600">{employee.position}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmployeeInfoPage; */

import { Input } from "@nextui-org/react";
import React, { useState } from "react";

interface Employee {
    name: string;
    position: string;
}

const EmployeeInfoPage = () => {
    // Employee data
    const employees: Employee[] = [
        { name: 'Arm', position: 'Front End' },
        { name: 'Game', position: 'Back End' }
    ];

    // State to store search input and result
    const [searchInput, setSearchInput] = useState<string>('');
    const [searchResult, setSearchResult] = useState<string>('');

    // Function to get employee information
    const getEmployeeInfo = (targetName: string): string => {
        const employee = employees.find(emp => emp.name.toLowerCase() === targetName.toLowerCase());
        return employee
            ? `ชื่อ ${employee.name} ตำแหน่ง ${employee.position}`
            : `Employee with name ${targetName} not found.`;
    };

    // Handle search input changes
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const targetName = event.target.value;
        setSearchInput(targetName);
        setSearchResult(getEmployeeInfo(targetName));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 py-10 px-4 md:px-10 lg:px-0">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">Employee Information</h1>
            <div className="flex flex-col items-center justify-center p-6 md:p-10 bg-white rounded-lg shadow-lg w-full max-w-5xl">
                <h2 className="text-center text-md sm:text-lg font-bold mb-6">Search</h2>
                <Input
                    placeholder="Search employee by name..."
                    value={searchInput}
                    onChange={handleSearch}
                    color="primary"
                    className="mb-6 max-w-md"
                />
                <div className="grid gap-6 grid-cols-1 max-w-5xl w-full">
                    <div
                        className="p-4 sm:p-4"
                    >
                        <h3 className="text-center text-lg sm:text-lg font-semibold text-gray-800">
                            {searchResult}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeInfoPage;
