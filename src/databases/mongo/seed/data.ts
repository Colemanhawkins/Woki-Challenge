export const seedData = {
  users: [
    { firstName: 'Test 1', lastName: 'User', email: 'test1@google.com', password: 'hashed_password_here' },
    { firstName: 'Test 2', lastName: 'User', email: 'test2@google.com', password: 'hashed_password_here' },
    { firstName: 'Test 3', lastName: 'User', email: 'test3@google.com', password: 'hashed_password_here' },
    { firstName: 'Test 4', lastName: 'User', email: 'test4@google.com', password: 'hashed_password_here' },
    { firstName: 'Test 5', lastName: 'User', email: 'test5@google.com', password: 'hashed_password_here' },
    { firstName: 'Test 6', lastName: 'User', email: 'test6@google.com', password: 'hashed_password_here' },
  ],

  projects: [
    { title: 'Project 1', description: 'Description for Project 1', dueDate: new Date(), status: 'not started', userIds: ['user_id_here'] },
    { title: 'Project 2', description: 'Description for Project 2', dueDate: new Date(), status: 'in progress', userIds: ['user_id_here'] },
  ],

  tasks: [
    { title: 'Task 1', description: 'Description for Task 1', dueDate: new Date(), status: 'not started', userIds: ['user_id_here'], projectId: 'project_id_here' },
    { title: 'Task 2', description: 'Description for Task 2', dueDate: new Date(), status: 'in progress', userIds: ['user_id_here'], projectId: 'project_id_here' },
  ]
};