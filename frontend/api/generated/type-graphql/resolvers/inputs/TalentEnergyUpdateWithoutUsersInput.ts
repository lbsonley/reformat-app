import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumTalentEnergiesFieldUpdateOperationsInput } from "../inputs/EnumTalentEnergiesFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TalentEnergyUpdateWithoutUsersInput", {
  isAbstract: true
})
export class TalentEnergyUpdateWithoutUsersInput {
  @TypeGraphQL.Field(_type => EnumTalentEnergiesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: EnumTalentEnergiesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;
}
