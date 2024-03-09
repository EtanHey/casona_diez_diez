import { User } from "@prisma/client";
import prisma from ".";

export async function getUserByLoginInfo(
  loginInfo: Pick<User, "username" | "password">,
) {  
  try {
    const { username, password } = loginInfo;
    const requestedUser = await prisma.user.findFirst({
      where: { username: username },
    });
    if (!requestedUser) {
      return { error: "User not found" };
    }
    const receivedUser = await prisma.user.findUnique({
      where: { id: requestedUser.id, username: username, password: password },
      select: {
        username: true,
      },
    });
    if (!receivedUser) {
      return { error: "Wrong password" };
    }
    return { data: receivedUser };
  } catch (error) {
    return { error };
  }
}
