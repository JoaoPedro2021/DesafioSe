import { Column, PrimaryGeneratedColumn, Entity, BeforeInsert, OneToMany} from "typeorm";
import bcrypt from "bcrypt";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    name!: string;

    @Column()
    email!: string;


    @Column()
    phone!: string;


    @Column()
    password!: string

    @Column({nullable: true})
    cep!:string

    @BeforeInsert()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 10);
    }
}