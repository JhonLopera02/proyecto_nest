
import { IsString, IsInt, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateCarDto {
    @IsString()
    @IsNotEmpty()
    model: string;

    @IsInt()
    @Min(1950)
    @Max(new Date().getFullYear() + 1)
    year: number;

    @IsString()
    @IsNotEmpty()
    color: string;

    @IsString()
    @IsNotEmpty()
    plate: string;

    @IsInt()
    brandId: number;
}