import { CreateUserDto } from '@models/CreateUserDto';
import { get, post } from './baseService';

const getCurrentUser = () => {
  return get('users/me');
};

const loginUser = (email: string, password: string) => {
  return post('users/login', {
    email,
    password
  });
};

const createUser = (data: CreateUserDto) => {
  return post('users/register', data);
};

export default {
  getCurrentUser,
  loginUser,
  createUser
};
