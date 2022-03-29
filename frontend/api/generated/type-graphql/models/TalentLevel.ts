import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { TalentLevels } from "../enums/TalentLevels";
import { TalentLevelCount } from "../resolvers/outputs/TalentLevelCount";

@TypeGraphQL.ObjectType("TalentLevel", {
  isAbstract: true
})
export class TalentLevel {
  @TypeGraphQL.Field(_type => TalentLevels, {
    nullable: false
  })
  id!: "ego" | "emotion" | "tao";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  users?: User[];

  @TypeGraphQL.Field(_type => TalentLevelCount, {
    nullable: true
  })
  _count?: TalentLevelCount | null;
}
