import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentLevels } from "../../enums/TalentLevels";

@TypeGraphQL.InputType("EnumTalentLevelsFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumTalentLevelsFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => TalentLevels, {
    nullable: true
  })
  set?: "ego" | "emotion" | "tao" | undefined;
}
