import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Lead } from '../../leads/entities/lead.entity';

@Table({ tableName: 'user_photos' })
export class UserPhoto extends Model<UserPhoto> {
  @ForeignKey(() => Lead)
  @Column({ type: DataType.INTEGER, allowNull: false })
  user_id: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  photo: string; // file path

  @BelongsTo(() => Lead)
  lead: Lead;
}