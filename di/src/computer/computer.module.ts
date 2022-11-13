import { Module } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { ComputerController } from './computer.controller';
import { DiskModule } from '../disk/disk.module';
import { CpuModule } from '../cpu/cpu.module';

@Module({
  providers: [ComputerService],
  controllers: [ComputerController],
  imports: [DiskModule, CpuModule]
})
export class ComputerModule {}
