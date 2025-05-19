import { SetMetadata } from "@nestjs/common";

export const ROLES_KEY = "roles"
export const Roles = (...roles:string[])=> SetMetadata(ROLES_KEY,roles)
//This allows users to use @Roles("admin") or @Roles("admin","user")