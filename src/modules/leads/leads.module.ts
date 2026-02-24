import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Lead } from './entities/lead.entity';
import { LeadService } from './leads.service';
import { LeadController } from './leads.controller';

@Module({
  imports: [SequelizeModule.forFeature([Lead])],
  providers: [LeadService],
  controllers: [LeadController],
  exports: [LeadService],
})
export class LeadModule {}