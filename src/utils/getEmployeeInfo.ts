interface Employee {
    name: string;
    position: string;
  }

export const getEmployeeInfo = (employees: Employee[], targetName: string): string => {
    const employee = employees.find(emp => emp.name === targetName);
    return employee 
      ? `ชื่อ ${employee.name} ตำแหน่ง ${employee.position}` 
      : `Employee with name ${targetName} not found.`;
  };