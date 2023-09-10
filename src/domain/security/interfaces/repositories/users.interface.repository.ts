import User from '../../entities/user.entity';

export default interface IUsersRepository {
  create(user: User): User;
  delete(id: string): void;
  update(id: string, user: Partial<User>): User;
  get(): Array<User>;
  getById(id: string): Array<User | null>;
}
