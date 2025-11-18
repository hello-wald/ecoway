import { UserModel } from "../model/userModel";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export class UserRepository {
  async createUser(data: UserModel): Promise<boolean> {
    try {
      await prisma.msUser.create({ data });
      return true;
    } catch (error) {
      console.error("Failed to create user:", error);
      return false;
    }
  }

  async getUserById(user_id: string): Promise<UserModel | null> {
    return await prisma.msUser.findUnique({
      where: { user_id },
    });
  }

  async getAllUsers(): Promise<UserModel[]> {
    return await prisma.msUser.findMany();
  }

  async updateUser(
    user_id: string,
    data: Partial<Omit<UserModel, "user_id">>
  ): Promise<boolean> {
    try {
      await prisma.msUser.update({
        where: { user_id },
        data,
      });
      return true;
    } catch (error) {
      console.error("Failed to update user:", error);
      return false;
    }
  }

  async deleteUser(user_id: string): Promise<boolean> {
    try {
      await prisma.msUser.delete({
        where: { user_id },
      });
      return true;
    } catch (error) {
      console.error("Failed to delete user:", error);
      return false;
    }
  }

  async getUserByEmail(email: string): Promise<UserModel | null> {
    return await prisma.msUser.findUnique({
      where: { user_email :email },
    });
  }
  
}
