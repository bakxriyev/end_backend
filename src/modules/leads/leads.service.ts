import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Lead } from './entities/lead.entity';
import { CreateLeadDto } from './dto/create-lead.dto';

@Injectable()
export class LeadService {
  constructor(
    @InjectModel(Lead) private readonly leadRepo: typeof Lead,
  ) {}

  async create(dto: CreateLeadDto) {
    return this.leadRepo.create(dto);
  }

  async findAll() {
    return this.leadRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.leadRepo.findByPk(id, { include: { all: true } });
  }
}
