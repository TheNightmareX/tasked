import { MikroOrmModule } from '@mikro-orm/nestjs';
import { forwardRef, Module } from '@nestjs/common';

import { SharedModule } from '../../shared/shared.module';
import { AssignmentsModule } from '../assignments/assignments.module';
import { MembershipInvitationsModule } from '../membership-invitations/membership-invitations.module';
import { MembershipRequestsModule } from '../membership-requests/membership-requests.module';
import { MembershipsModule } from '../memberships/memberships.module';
import { TasksModule } from '../tasks/tasks.module';
import { TeamsModule } from '../teams/teams.module';
import { User } from './entities/user.entity';
import { UserRefLoader } from './user-ref.loader';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { UsersFieldsResolver } from './users-fields.resolver';

@Module({
  imports: [
    SharedModule,
    MikroOrmModule.forFeature([User]),
    forwardRef(() => TeamsModule),
    forwardRef(() => MembershipsModule),
    forwardRef(() => MembershipRequestsModule),
    forwardRef(() => MembershipInvitationsModule),
    forwardRef(() => TasksModule),
    forwardRef(() => AssignmentsModule),
  ],
  providers: [UsersResolver, UsersFieldsResolver, UsersService, UserRefLoader],
  exports: [UsersService, UserRefLoader],
})
export class UsersModule {}
