import { PrismaClient } from "@prisma/client";
import { getUserByLoginInfo } from "./usersCont";

const prisma = new PrismaClient();
export { getUserByLoginInfo };
export default prisma;
