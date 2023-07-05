import { User, Role, selectUserRoles } from "./example";

const users = [
  { name: "John Doe", role: Role.ADMIN },
  { name: "Adam Doe", role: Role.VISITOR },
  { name: "Boo Doe", role: Role.OWNER },
  { name: "Baz Doe", role: Role.OWNER },
] satisfies User[];

test(selectUserRoles.name, () => {
  expect(selectUserRoles([])).toEqual([]);

  expect(selectUserRoles(users)).toEqual([
    Role.ADMIN,
    Role.VISITOR,
    Role.OWNER,
  ]);
});
