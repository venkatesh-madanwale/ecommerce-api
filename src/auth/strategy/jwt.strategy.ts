import { Injectable } from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";

// @Injectable()