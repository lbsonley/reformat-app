import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumTalentLevelsFieldUpdateOperationsInput } from "../inputs/EnumTalentLevelsFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TalentLevelUpdateManyMutationInput", {
  isAbstract: true
})
export class TalentLevelUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => EnumTalentLevelsFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: EnumTalentLevelsFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;
}
