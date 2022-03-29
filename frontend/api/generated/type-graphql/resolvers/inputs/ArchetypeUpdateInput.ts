import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumArchetypesFieldUpdateOperationsInput } from "../inputs/EnumArchetypesFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutArchetypeInput } from "../inputs/UserUpdateManyWithoutArchetypeInput";

@TypeGraphQL.InputType("ArchetypeUpdateInput", {
  isAbstract: true
})
export class ArchetypeUpdateInput {
  @TypeGraphQL.Field(_type => EnumArchetypesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: EnumArchetypesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutArchetypeInput, {
    nullable: true
  })
  users?: UserUpdateManyWithoutArchetypeInput | undefined;
}
