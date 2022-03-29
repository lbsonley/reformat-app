import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumTalentLevelsFieldUpdateOperationsInput } from "../inputs/EnumTalentLevelsFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutTalentLevelInput } from "../inputs/UserUpdateManyWithoutTalentLevelInput";

@TypeGraphQL.InputType("TalentLevelUpdateInput", {
  isAbstract: true
})
export class TalentLevelUpdateInput {
  @TypeGraphQL.Field(_type => EnumTalentLevelsFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: EnumTalentLevelsFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutTalentLevelInput, {
    nullable: true
  })
  users?: UserUpdateManyWithoutTalentLevelInput | undefined;
}
