import { MongoDatabase } from '..';
import { UserModel, ProjectModel, TaskModel } from '../models';
import { envs } from '../../../config';
import { seedData } from './data';
import  {  Types } from 'mongoose';

(async () => {
  await MongoDatabase.connect({
    dbName: envs.MONGO_DB_NAME,
    mongoUrl: envs.MONGO_URL
  });

  await main();

  await MongoDatabase.disconnect();
})();

const randomBetween0AndX = (x: number) => {
  return Math.floor(Math.random() * x);
};

async function main() {
  // Borrar todos los documentos existentes
  await Promise.all([
    UserModel.deleteMany({}),
    ProjectModel.deleteMany({}),
    TaskModel.deleteMany({})
  ]);

  // Crear usuarios
  const users = await UserModel.insertMany(seedData.users);

  // Crear proyectos con referencias a usuarios
  const projects = await ProjectModel.insertMany(seedData.projects.map((project, index) => ({
    title: project.title,
    description: `Description for ${project.title}`,
    dueDate: new Date(),
    status: 'not started',
    userIds: [users[index % users.length]._id],
    taskIds: [] as Types.ObjectId[]
  })));

  // Crear tareas con referencias a proyectos
  const tasks = await TaskModel.insertMany(seedData.tasks.map((task, index) => ({
    title: task.title,
    description: task.description,
    dueDate: new Date(),
    status: 'not started',
    userIds: [users[index % users.length]._id],
    projectId: projects[randomBetween0AndX(projects.length)]._id
  })));

  // Actualizar los IDs de tareas en los proyectos correspondientes
  await Promise.all(projects.map(async (project) => {
    const tasksForProject = tasks.filter(task => task.projectId.equals(project._id));
    project.taskIds = tasksForProject.map(task => task._id); // Usar mongoose.Types.ObjectId()
    await project.save();
  }));

  await Promise.all(users.map(async (user) => {
    const projectsForUser = projects.filter(project => project.userIds.includes(user._id));
    const tasksForUser = tasks.filter(task => task.userIds.includes(user._id))
    user.projectIds = projectsForUser.map(project => project._id);
    user.taskIds = tasksForUser.map(task => task._id)
    await user.save();
  }));

  console.log('SEEDED');
}