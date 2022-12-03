import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './reports.entity';
import { DatabaseModule } from 'src/database.module';
import { reportProviders } from './reports.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ReportsController],
  providers: [...reportProviders, ReportsService]
})
export class ReportsModule {}
