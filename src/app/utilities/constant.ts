export const USER_ROLE = {
  SUPER_ADMIN: "SUPER_ADMIN",
  ADMIN: "ADMIN",
  EDITOR: "EDITOR",
  JOURNALIST: "JOURNALIST",
  REPORTER: "REPORTER",
  READER: "READER",
} as const;

export const USER_STATUS = {
  ACTIVE: "ACTIVE",
  BLOCKED: "BLOCKED",
} as const;

export const adminSearchableFields = ["name", "email", "phone"];

export const UserSearchableFields = [
  "name",
  "email",
  "phone",
  "role",
  "status",
];
