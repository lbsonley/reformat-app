import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentLevels } from "../../enums/TalentLevels";

@TypeGraphQL.InputType("NullableEnumTalentLevelsFieldUpdateOperationsInput", {
  isAbstract: true
})
export class NullableEnumTalentLevelsFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => TalentLevels, {
    nullable: true
  })
  set?: "ego" | "emotion" | "tao" | undefined;
}
