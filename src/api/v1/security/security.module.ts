import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import AuthenticationModule from './authentication/auth.module';
import PermissionsModule from './permissions/permissions.module';
import RolesModule from './roles/roles.module';

@Module({
  imports: [
    AuthenticationModule,
    PermissionsModule,
    RolesModule,
    RouterModule.register([
      {
        path: 'security',
        children: [
          { path: 'permissions', module: PermissionsModule },
          { path: 'roles', module: RolesModule },
        ],
      },
    ]),
  ],
})
export default class SecurityModule {}
