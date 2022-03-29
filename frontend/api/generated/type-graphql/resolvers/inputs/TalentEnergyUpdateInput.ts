import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumTalentEnergiesFieldUpdateOperationsInput } from "../inputs/EnumTalentEnergiesFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutTalentEnergyInput } from "../inputs/UserUpdateManyWithoutTalentEnergyInput";

@TypeGraphQL.InputType("TalentEnergyUpdateInput", {
  isAbstract: true
})
export class TalentEnergyUpdateInput {
  @TypeGraphQL.Field(_type => EnumTalentEnergiesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: EnumTalentEnergiesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutTalentEnergyInput, {
    nullable: true
  })
  users?: UserUpdateManyWithoutTalentEnergyInput | undefined;
}
