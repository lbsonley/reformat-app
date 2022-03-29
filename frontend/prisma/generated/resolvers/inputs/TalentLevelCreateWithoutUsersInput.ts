import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentLevels } from "../../enums/TalentLevels";

@TypeGraphQL.InputType("TalentLevelCreateWithoutUsersInput", {
  isAbstract: true
})
export class TalentLevelCreateWithoutUsersInput {
  @TypeGraphQL.Field(_type => TalentLevels, {
    nullable: false
  })
  id!: "ego" | "emotion" | "tao";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;
}
