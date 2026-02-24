import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserPhoto } from './entities/user-photo.entity';
import { UserPhotoService } from './user-photos.service';
import { UserPhotoController } from './user-photos.controller';

@Module({
  imports: [SequelizeModule.forFeature([UserPhoto])],
  providers: [UserPhotoService],
  controllers: [UserPhotoController],
  exports:[UserPhotoService]
})
export class UserPhotoModule {}
