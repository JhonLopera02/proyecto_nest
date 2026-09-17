import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Car } from '../../cars/entities/car.entity.js';

@Entity('brand')
export class Brand {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    country: string;

    @Column()
    isActive: boolean;

    @Column()
    createAt: Date;

    @Column()
    updateat: Date;

    @OneToMany (() => Car, (car)=> car.brand)
    cars: Car[];
}

