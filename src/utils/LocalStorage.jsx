const employees = [
  {
    id: 1,
    name: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Login Page",
        taskDescription: "Create a responsive login page using React.",
        taskDate: "2026-06-25",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile navigation issue.",
        taskDate: "2026-06-20",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect login form with backend API.",
        taskDate: "2026-06-18",
        category: "Backend",
      },
    ],
  },

  {
    id: 2,
    name: "Diya Kapoor",
    email: "diya.kapoor@example.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Dashboard",
        taskDescription: "Create dashboard wireframes.",
        taskDate: "2026-06-26",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create User Cards",
        taskDescription: "Build reusable user card component.",
        taskDate: "2026-06-25",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Update project README.",
        taskDate: "2026-06-21",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review PR",
        taskDescription: "Review teammate's pull request.",
        taskDate: "2026-06-19",
        category: "Management",
      },
    ],
  },

  {
    id: 3,
    name: "Rohan Malhotra",
    email: "rohan.malhotra@example.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create REST API",
        taskDescription: "Develop employee API endpoints.",
        taskDate: "2026-06-25",
        category: "Backend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database Schema",
        taskDescription: "Design MongoDB collections.",
        taskDate: "2026-06-24",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "JWT Authentication",
        taskDescription: "Implement authentication system.",
        taskDate: "2026-06-22",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Gateway",
        taskDescription: "Integrate payment service.",
        taskDate: "2026-06-17",
        category: "Backend",
      },
    ],
  },

  {
    id: 4,
    name: "Ananya Roy",
    email: "ananya.roy@example.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Testing Login Module",
        taskDescription: "Perform unit testing.",
        taskDate: "2026-06-25",
        category: "Testing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Bug Report",
        taskDescription: "Document reported issues.",
        taskDate: "2026-06-24",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Regression Testing",
        taskDescription: "Verify old features.",
        taskDate: "2026-06-20",
        category: "Testing",
      },
    ],
  },

  {
    id: 5,
    name: "Rohan Singh",
    email: "rohan.singh@example.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deploy Application",
        taskDescription: "Deploy app to production.",
        taskDate: "2026-06-27",
        category: "DevOps",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Configure CI/CD",
        taskDescription: "Set up deployment pipeline.",
        taskDate: "2026-06-26",
        category: "DevOps",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Server Monitoring",
        taskDescription: "Monitor server performance.",
        taskDate: "2026-06-22",
        category: "DevOps",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Docker Migration",
        taskDescription: "Containerise application.",
        taskDate: "2026-06-15",
        category: "DevOps",
      },
    ],
  },
];

const admin = [
  {
    id: 101,
    name: "Admin User",
    email: "admin@example.com",
    password: "123",
  },
];


export const setLocalStorage = () => {
    if (!localStorage.getItem("employees")) {
      localStorage.setItem("employees", JSON.stringify(employees));
    }

    if (!localStorage.getItem("admin")) {
      localStorage.setItem("admin", JSON.stringify(admin));
    }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));

  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
