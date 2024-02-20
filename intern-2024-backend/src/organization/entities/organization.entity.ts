import { OrganizationUser } from '../../organization_users/entities/organization_user.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    JoinColumn,
    BaseEntity,
    PrimaryColumn,
    BeforeInsert,
  } from 'typeorm';
  import * as uuid from 'uuid';
  
  @Entity({ name: 'organizations' })
  export class Organization extends BaseEntity{
    // @BeforeInsert() 
    // genarate(){ 
    //     this.id=uuid.v4();
    // }
    
    @PrimaryGeneratedColumn('uuid')
    id:string;
  
    @Column({ name: 'name', unique: true })
    name: string;
  
    @Column({ name: 'slug', unique: true })
    slug: string;
  
    @Column({ name: 'domain' })
    domain: string;
  
    @Column({ name: 'enable_sign_up' })
    enableSignUp: boolean;
  
    @Column({ name: 'inherit_sso' })
    inheritSSO: boolean;
  
    @CreateDateColumn({ default: new Date(), name: 'created_at' })
    createdAt: Date;
  
    @UpdateDateColumn({ default: new Date(), name: 'updated_at' })
    updatedAt: Date;

    @OneToMany(() => OrganizationUser, (organizationUser) => organizationUser.organization, {cascade:true})
    organizationUsers: OrganizationUser[];
  }
  
