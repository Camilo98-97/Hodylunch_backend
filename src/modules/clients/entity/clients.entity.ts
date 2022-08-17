import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity('clients')
export class Client extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    public id_client: number;

    @Column({ type: 'character varying' })
    public name: string;

    @Column({ type: 'character varying' })
    public last_name: string;

    @Column({ type: 'character varying' })
    public city: string;

    @Column({ type: 'character varying' })
    public address: string;

    @Column({ type: 'character varying' })
    public email: string;

    @Column({ type: 'character varying' })
    public password: string;

    @Column({ type: 'character varying' })
    public phone_number: string;
}