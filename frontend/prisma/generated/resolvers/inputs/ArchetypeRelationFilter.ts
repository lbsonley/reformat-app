import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArchetypeWhereInput } from "../inputs/ArchetypeWhereInput";

@TypeGraphQL.InputType("ArchetypeRelationFilter", {
  isAbstract: true
})
export class ArchetypeRelationFilter {
  @TypeGraphQL.Field(_type => ArchetypeWhereInput, {
    nullable: true
  })
  is?: ArchetypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => ArchetypeWhereInput, {
    nullable: true
  })
  isNot?: ArchetypeWhereInput | undefined;
}
