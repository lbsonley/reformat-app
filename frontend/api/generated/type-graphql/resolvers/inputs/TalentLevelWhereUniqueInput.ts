import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentLevels } from "../../enums/TalentLevels";

@TypeGraphQL.InputType("TalentLevelWhereUniqueInput", {
  isAbstract: true
})
export class TalentLevelWhereUniqueInput {
  @TypeGraphQL.Field(_type => TalentLevels, {
    nullable: true
  })
  id?: "ego" | "emotion" | "tao" | undefined;
}
