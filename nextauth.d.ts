import "next-auth";
import { Role } from "@prisma/client";

declare module "next-auth" {
    interface User {
        role: Role;
    }

    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            image: string;
            role: Role;
        }
    }
}