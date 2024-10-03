// data.ts

// Definiera SimpleTodo-interfacet
export interface SimpleTodo {
  id: string;
  createDate: Date;
  title: string;
  description: string;
  deadLine: Date;
  done: boolean;
}

// Initiala todos-array
export const todos: SimpleTodo[] = [
  {
    id: "1",
    createDate: new Date("2024-09-01"),
    title: "Buy groceries",
    description: "Purchase milk, eggs, and bread from the store",
    deadLine: new Date("2024-09-02"),
    done: false,
  },
  {
    id: "2",
    createDate: new Date("2024-09-10"),
    title: "Finish project report",
    description: "Complete the final report for the client project",
    deadLine: new Date("2024-09-15"),
    done: false,
  },
  {
    id: "3",
    createDate: new Date("2024-09-05"),
    title: "Clean the house",
    description: "Vacuum, dust, and mop all floors",
    deadLine: new Date("2024-09-07"),
    done: true,
  },
  {
    id: "4",
    createDate: new Date("2024-09-08"),
    title: "Call plumber",
    description: "Schedule a visit to fix the leaky faucet in the kitchen",
    deadLine: new Date("2024-09-09"),
    done: true,
  },
  {
    id: "5",
    createDate: new Date("2024-09-12"),
    title: "Attend team meeting",
    description: "Participate in the quarterly team strategy meeting",
    deadLine: new Date("2024-09-13"),
    done: false,
  },
];
