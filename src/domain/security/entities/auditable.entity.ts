import BaseEntity from './base-entity';

export interface IHaveUpdatedData {
  updatedAt: Date | null;
  updatedBy: string | null;
}

export interface IHaveCreationData {
  createdAt: Date;
  createdBy: string;
}

export default class AuditableEntity extends BaseEntity implements IHaveCreationData, IHaveUpdatedData {
  createdAt: Date = new Date();
  createdBy = '';
  updatedAt: Date | null = null;
  updatedBy: string | null = null;
}
