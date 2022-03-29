import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Languages } from "../../enums/Languages";

@TypeGraphQL.InputType("EnumLanguagesFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumLanguagesFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Languages, {
    nullable: true
  })
  set?: "de" | "en" | "fr" | "it" | undefined;
}
