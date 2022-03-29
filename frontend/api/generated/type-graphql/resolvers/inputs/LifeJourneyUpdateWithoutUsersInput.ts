import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumLifeJourneysFieldUpdateOperationsInput } from "../inputs/EnumLifeJourneysFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("LifeJourneyUpdateWithoutUsersInput", {
  isAbstract: true
})
export class LifeJourneyUpdateWithoutUsersInput {
  @TypeGraphQL.Field(_type => EnumLifeJourneysFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: EnumLifeJourneysFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;
}
