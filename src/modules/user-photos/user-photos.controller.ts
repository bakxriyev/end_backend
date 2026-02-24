import { Controller, Post, Param, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserPhotoService } from './user-photos.service';

@ApiTags('User Photos')
@Controller('user-photos')
export class UserPhotoController {
  constructor(private readonly photoService: UserPhotoService) {}

  @ApiOperation({ summary: 'Upload user photo' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @Post(':userId/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, unique + extname(file.originalname));
        },
      }),
      limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
      },
    }),
  )
  upload(
    @Param('userId') userId: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.photoService.upload(+userId, file.filename);
  }
}