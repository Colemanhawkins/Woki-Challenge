export const seedData = {
  users: [
    { firstName: 'Test 1', lastName: 'User1', email: 'test1@google.com', password: 'hashed_password_here', role: 'ADMIN_ROLE' },
    { firstName: 'Test 2', lastName: 'User2', email: 'test2@google.com', password: 'hashed_password_here', role: 'USER_ROLE' },
    { firstName: 'Test 3', lastName: 'User3', email: 'test3@google.com', password: 'hashed_password_here', role: 'USER_ROLE' },
    { firstName: 'Test 4', lastName: 'User4', email: 'test4@google.com', password: 'hashed_password_here', role: 'USER_ROLE' },
    { firstName: 'Test 5', lastName: 'User5', email: 'test5@google.com', password: 'hashed_password_here', role: 'USER_ROLE' },
    { firstName: 'Test 6', lastName: 'User6', email: 'test6@google.com', password: 'hashed_password_here', role: 'USER_ROLE' },
  ],

  projects: [
    { title: 'Project 1', description: 'Description for Project 1', dueDate: new Date(), status: 'not started', userIds: ['user_id_here'] },
    { title: 'Project 2', description: 'Description for Project 2', dueDate: new Date(), status: 'in progress', userIds: ['user_id_here'] },
  ],

  tasks: [
    { title: 'Task 1', description: 'Description for Task 1', dueDate: new Date(), status: 'not started', userIds: ['user_id_here'], projectId: 'project_id_here' },
    { title: 'Task 2', description: 'Description for Task 2', dueDate: new Date(), status: 'in progress', userIds: ['user_id_here'], projectId: 'project_id_here' },
    { title: 'Task 3', description: 'Description for Task 3', dueDate: new Date(), status: 'not started', userIds: ['user_id_here'], projectId: 'project_id_here' },
    { title: 'Task 4', description: 'Description for Task 4', dueDate: new Date(), status: 'in progress', userIds: ['user_id_here'], projectId: 'project_id_here' },
    { title: 'Task 5', description: 'Description for Task 5', dueDate: new Date(), status: 'not started', userIds: ['user_id_here'], projectId: 'project_id_here' },
    { title: 'Task 6', description: 'Description for Task 6', dueDate: new Date(), status: 'in progress', userIds: ['user_id_here'], projectId: 'project_id_here' }
  ]
};