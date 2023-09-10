import AuditableEntity from './auditable.entity';

export default class User extends AuditableEntity {
  username = '';
  normalizedUsername = '';
  email = '';
  normalizedEmail = '';
  password = '';
  phoneNumber = '';
  cardId = '';
}
