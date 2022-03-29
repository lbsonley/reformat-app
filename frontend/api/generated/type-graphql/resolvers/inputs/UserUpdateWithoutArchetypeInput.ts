import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumLanguagesFieldUpdateOperationsInput } from "../inputs/EnumLanguagesFieldUpdateOperationsInput";
import { LifeJourneyUpdateOneWithoutUsersInput } from "../inputs/LifeJourneyUpdateOneWithoutUsersInput";
import { NullableEnumArchetypesFieldUpdateOperationsInput } from "../inputs/NullableEnumArchetypesFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TalentEnergyUpdateOneWithoutUsersInput } from "../inputs/TalentEnergyUpdateOneWithoutUsersInput";
import { TalentLevelUpdateOneWithoutUsersInput } from "../inputs/TalentLevelUpdateOneWithoutUsersInput";

@TypeGraphQL.InputType("UserUpdateWithoutArchetypeInput", {
  isAbstract: true
})
export class UserUpdateWithoutArchetypeInput {
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

  @TypeGraphQL.Field(_type => LifeJourneyUpdateOneWithoutUsersInput, {
    nullable: true
  })
  lifeJourney?: LifeJourneyUpdateOneWithoutUsersInput | undefined;

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
