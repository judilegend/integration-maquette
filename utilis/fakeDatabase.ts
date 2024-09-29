// utils/fakeDatabase.ts
import { faker } from "@faker-js/faker";

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  plan: string;
  status: string;
  billing: string;
}

const roles = ["Admin", "Editor", "Author", "Maintainer", "Subscriber"];
const plans = ["Basic", "Company", "Enterprise", "Team"];
const statuses = ["Active", "Pending", "Inactive"];

export const generateUsers = (count: number): User[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement(roles),
    plan: faker.helpers.arrayElement(plans),
    status: faker.helpers.arrayElement(statuses),
    billing: faker.finance.amount({ min: 100, max: 5000, dec: 2, symbol: "$" }) + "/month",
  }));};

export const fakeDatabase = generateUsers(1000);

export const fetchUsers = (page: number, perPage: number) => {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return {
    users: fakeDatabase.slice(start, end),
    total: fakeDatabase.length,
  };
};
