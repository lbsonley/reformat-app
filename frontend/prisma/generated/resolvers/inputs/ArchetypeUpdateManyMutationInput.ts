import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumArchetypesFieldUpdateOperationsInput } from "../inputs/EnumArchetypesFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ArchetypeUpdateManyMutationInput", {
  isAbstract: true
})
export class ArchetypeUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => EnumArchetypesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: EnumArchetypesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;
}
