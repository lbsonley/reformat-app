import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArchetypeCreateOrConnectWithoutUsersInput } from "../inputs/ArchetypeCreateOrConnectWithoutUsersInput";
import { ArchetypeCreateWithoutUsersInput } from "../inputs/ArchetypeCreateWithoutUsersInput";
import { ArchetypeWhereUniqueInput } from "../inputs/ArchetypeWhereUniqueInput";

@TypeGraphQL.InputType("ArchetypeCreateNestedOneWithoutUsersInput", {
  isAbstract: true
})
export class ArchetypeCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => ArchetypeCreateWithoutUsersInput, {
    nullable: true
  })
  create?: ArchetypeCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ArchetypeCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: ArchetypeCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ArchetypeWhereUniqueInput, {
    nullable: true
  })
  connect?: ArchetypeWhereUniqueInput | undefined;
}
