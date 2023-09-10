import User from '../../entities/user.entity';

export default interface IUsersService {
  create(user: User): User;
  delete(id: string): void;
  update(id: string, user: Partial<User>): User;
  Get(): Array<User>;
  getById(id: string): Array<User | null>;
}
