import { Injectable } from '@nestjs/common';

import User from '../entities/user.entity';
import IUsersRepository from '../interfaces/repositories/users.interface.repository';
import IUsersService from '../interfaces/services/users.interface.service';

@Injectable()
export default class UsersService implements IUsersService {
  constructor(private readonly usersRepository: IUsersRepository) {}

  create(user: User): User {
    return this.usersRepository.create(user);
  }

  delete(id: string): void {
    return this.usersRepository.delete(id);
  }

  update(id: string, user: Partial<User>): User {
    return this.usersRepository.update(id, user);
  }

  Get(): User[] {
    return this.usersRepository.get();
  }

  getById(id: string): Array<User | null> {
    return this.usersRepository.getById(id);
  }
}
