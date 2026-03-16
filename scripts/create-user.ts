import "dotenv/config";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

async function createUser() {
  const hashedPassword = await bcrypt.hash("...password...", 10);

  await prisma.user.create({
    data: {
      email: "you@example.com",
      password: hashedPassword,
      name: "Your Name",
    },
  });

  console.log("User created");
}

createUser();
