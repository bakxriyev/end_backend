import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserPhoto } from './entities/user-photo.entity';

@Injectable()
export class UserPhotoService {
  constructor(
    @InjectModel(UserPhoto) private readonly photoRepo: typeof UserPhoto,
  ) {}

 async upload(user_id: number, filename: string) {
  return this.photoRepo.create({
    user_id,
    photo: filename,
  });
}
}
