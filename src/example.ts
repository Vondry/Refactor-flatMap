export enum Role {
  VISITOR,
  ADMIN,
  OWNER,
}

export type User = {
  name: string;
  role: Role;
};

// Original code:
/*
export const selectUserRoles = (users: User[]) => {
  const roles = Role[] = [];

  users.forEach((user) => {
    if (!roles.includes(user.role)) {
      roles.push(user.role);
    }
  });

  return roles;
};
*/

const removeDuplicities = <T>(array: T[]) => Array.from(new Set(array));

export const selectUserRoles = (users: User[]) => {
  const roles = users.flatMap(({ role }) => role);
  return removeDuplicities(roles);
};
