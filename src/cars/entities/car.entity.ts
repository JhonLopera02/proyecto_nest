import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Brand } from '../../brand/entities/brand.entity.js';

@Entity('cars')
export class Car {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    model: string;

    @Column({ type: 'int' })
    year: number;

    @Column({ type: 'varchar', length: 50 })
    color: string;

    @Column({ type: 'varchar', length: 20, unique: true })
    plate: string;

    @ManyToOne(() => Brand, (brand) => brand.cars, { eager: false })
    @JoinColumn({ name: 'brand_id' })
    brand: Brand;
}