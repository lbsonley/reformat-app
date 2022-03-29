import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumLifeJourneysFieldUpdateOperationsInput } from "../inputs/EnumLifeJourneysFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutLifeJourneyInput } from "../inputs/UserUpdateManyWithoutLifeJourneyInput";

@TypeGraphQL.InputType("LifeJourneyUpdateInput", {
  isAbstract: true
})
export class LifeJourneyUpdateInput {
  @TypeGraphQL.Field(_type => EnumLifeJourneysFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: EnumLifeJourneysFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutLifeJourneyInput, {
    nullable: true
  })
  users?: UserUpdateManyWithoutLifeJourneyInput | undefined;
}
