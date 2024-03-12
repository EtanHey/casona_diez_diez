import { PrismaClient } from "@prisma/client";
import { getUserByLoginInfo } from "./usersCont";
import { getOffers, updateOffer } from "./offersCont";

const prisma = new PrismaClient();
export { getUserByLoginInfo, getOffers, updateOffer };
export default prisma;
