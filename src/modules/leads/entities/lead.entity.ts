import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { UserPhoto } from '../../user-photos/entities/user-photo.entity';

@Table({ tableName: 'leads' })
export class Lead extends Model<Lead> {
  @Column({ type: DataType.STRING, allowNull: false })
  full_name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  phone_number: string;

  @Column({ type: DataType.STRING, allowNull: false })
  address: string;

  @HasMany(() => UserPhoto)
  photos: UserPhoto[];
}
