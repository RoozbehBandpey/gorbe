import {
  IsString,
  IsNumber,
  Min,
  Max,
  IsLongitude,
  IsLatitude
} from 'class-validator';
import {
  Expose,
  Transform
} from 'class-transformer';
import { User } from 'src/users/users.entity';

export class ReportDto {
  @Expose()
  id: number;
  @Expose()
  price: number;
  @Expose()
  make: string;
  @Expose()
  model: string;
  @Expose()
  year: number;
  @Expose()
  lng: number;
  @Expose()
  lat: number;
  @Expose()
  mileage: number;
  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}