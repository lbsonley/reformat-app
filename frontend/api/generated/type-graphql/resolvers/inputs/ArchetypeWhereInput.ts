import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumArchetypesFilter } from "../inputs/EnumArchetypesFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@TypeGraphQL.InputType("ArchetypeWhereInput", {
  isAbstract: true
})
export class ArchetypeWhereInput {
  @TypeGraphQL.Field(_type => [ArchetypeWhereInput], {
    nullable: true
  })
  AND?: ArchetypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArchetypeWhereInput], {
    nullable: true
  })
  OR?: ArchetypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArchetypeWhereInput], {
    nullable: true
  })
  NOT?: ArchetypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => EnumArchetypesFilter, {
    nullable: true
  })
  id?: EnumArchetypesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  users?: UserListRelationFilter | undefined;
}
