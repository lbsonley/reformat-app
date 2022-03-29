import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutArchetypeInput } from "../inputs/UserCreateNestedManyWithoutArchetypeInput";
import { Archetypes } from "../../enums/Archetypes";

@TypeGraphQL.InputType("ArchetypeCreateInput", {
  isAbstract: true
})
export class ArchetypeCreateInput {
  @TypeGraphQL.Field(_type => Archetypes, {
    nullable: false
  })
  id!: "mentor" | "herald" | "gatekeeper" | "joker";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutArchetypeInput, {
    nullable: true
  })
  users?: UserCreateNestedManyWithoutArchetypeInput | undefined;
}
