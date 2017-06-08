import { v4 } from 'node-uuid';

export const users = [
  {
    id: v4(),
    firstname: 'John',
    lastname: 'Doe',
    email: 'johndoe@gmail.com'
  },
  {
    id: v4(),
    firstname: 'Jane',
    lastname: 'Doe',
    email: 'janedoe@gmail.com'
  }
];
