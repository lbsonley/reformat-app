import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArchetypeUpdateOneWithoutUsersInput } from "../inputs/ArchetypeUpdateOneWithoutUsersInput";
import { EnumLanguagesFieldUpdateOperationsInput } from "../inputs/EnumLanguagesFieldUpdateOperationsInput";
import { NullableEnumArchetypesFieldUpdateOperationsInput } from "../inputs/NullableEnumArchetypesFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TalentEnergyUpdateOneWithoutUsersInput } from "../inputs/TalentEnergyUpdateOneWithoutUsersInput";
import { TalentLevelUpdateOneWithoutUsersInput } from "../inputs/TalentLevelUpdateOneWithoutUsersInput";

@TypeGraphQL.InputType("UserUpdateWithoutLifeJourneyInput", {
  isAbstract: true
})
export class UserUpdateWithoutLifeJourneyInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  firstName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  lastName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumLanguagesFieldUpdateOperationsInput, {
    nullable: true
  })
  language?: EnumLanguagesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  animal?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ArchetypeUpdateOneWithoutUsersInput, {
    nullable: true
  })
  archetype?: ArchetypeUpdateOneWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  talent?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TalentLevelUpdateOneWithoutUsersInput, {
    nullable: true
  })
  talentLevel?: TalentLevelUpdateOneWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => TalentEnergyUpdateOneWithoutUsersInput, {
    nullable: true
  })
  talentEnergy?: TalentEnergyUpdateOneWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumArchetypesFieldUpdateOperationsInput, {
    nullable: true
  })
  heroJourneyProgress?: NullableEnumArchetypesFieldUpdateOperationsInput | undefined;
}
