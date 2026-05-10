// declare globally for usage without import

import type { UserStatus } from "../@enums/userstatus.enum";

declare global {
  type UserType = {
    _id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    profileImg: string;
    roleIds: string[];
    isPrivate: boolean;
    status: UserStatus;
    blockedUserIds: string[];
    friendIds: string[];
    createdAt: Date;
    updatedAt: Date;
  };
}

export {};
