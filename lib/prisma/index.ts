import { PrismaClient } from "@prisma/client";
import { getUserByLoginInfo } from "./usersCont";
import { getOffer, updateOffer } from "./offersCont";

const prisma = new PrismaClient();
export { getUserByLoginInfo, getOffer, updateOffer };
export default prisma;
