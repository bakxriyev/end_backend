import { PartialType } from '@nestjs/swagger';
import { CreateUserPhotoDto } from './create-user-photo.dto';

export class UpdateUserPhotoDto extends PartialType(CreateUserPhotoDto) {}
