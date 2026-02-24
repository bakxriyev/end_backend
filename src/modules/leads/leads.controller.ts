import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LeadService } from './leads.service';
import { CreateLeadDto } from './dto/create-lead.dto';

@ApiTags('Leads')
@Controller('leads')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @ApiOperation({ summary: 'Create new lead' })
  @ApiResponse({ status: 201, description: 'Lead created successfully' })
  @Post()
  create(@Body() dto: CreateLeadDto) {
    return this.leadService.create(dto);
  }

  @ApiOperation({ summary: 'Get all leads with photos' })
  @Get()
  findAll() {
    return this.leadService.findAll();
  }

  @ApiOperation({ summary: 'Get single lead with photos' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.leadService.findOne(+id);
  }
}