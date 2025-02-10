const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create a responsive design for the homepage.",
        taskDate: "2023-10-15",
        category: "Design",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve the issue with the login functionality.",
        taskDate: "2023-10-16",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write API Documentation",
        taskDescription: "Document the new API endpoints.",
        taskDate: "2023-10-17",
        category: "Documentation",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Priyanshu",
    email: "employee2@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Database",
        taskDescription: "Improve database query performance.",
        taskDate: "2023-10-18",
        category: "Database",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create User Dashboard",
        taskDescription: "Develop a dashboard for user analytics.",
        taskDate: "2023-10-19",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Payment Gateway",
        taskDescription: "Ensure the payment gateway is working correctly.",
        taskDate: "2023-10-20",
        category: "Testing",
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Virat",
    email: "employee3@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Security Policies",
        taskDescription: "Review and update the company's security policies.",
        taskDate: "2023-10-21",
        category: "Security",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deploy New Server",
        taskDescription: "Set up and deploy a new server for the application.",
        taskDate: "2023-10-22",
        category: "DevOps",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Monitor System Performance",
        taskDescription:
          "Keep an eye on system performance and resolve any issues.",
        taskDate: "2023-10-23",
        category: "Monitoring",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Anjali",
    email: "employee4@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Marketing Campaign",
        taskDescription:
          "Develop a new marketing campaign for the product launch.",
        taskDate: "2023-10-24",
        category: "Marketing",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Analyze Competitor Data",
        taskDescription: "Gather and analyze data on competitors.",
        taskDate: "2023-10-25",
        category: "Research",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare Quarterly Report",
        taskDescription: "Compile and prepare the quarterly financial report.",
        taskDate: "2023-10-26",
        category: "Finance",
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Develop Mobile App",
        taskDescription: "Start development on the new mobile application.",
        taskDate: "2023-10-27",
        category: "Development",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Conduct User Testing",
        taskDescription: "Organize and conduct user testing sessions.",
        taskDate: "2023-10-28",
        category: "Testing",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Company Website",
        taskDescription:
          "Refresh the content and design of the company website.",
        taskDate: "2023-10-29",
        category: "Design",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    firstName: "Admin",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employee"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
