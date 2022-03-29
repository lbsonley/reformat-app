import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumLifeJourneysFilter } from "../inputs/EnumLifeJourneysFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@TypeGraphQL.InputType("LifeJourneyWhereInput", {
  isAbstract: true
})
export class LifeJourneyWhereInput {
  @TypeGraphQL.Field(_type => [LifeJourneyWhereInput], {
    nullable: true
  })
  AND?: LifeJourneyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LifeJourneyWhereInput], {
    nullable: true
  })
  OR?: LifeJourneyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LifeJourneyWhereInput], {
    nullable: true
  })
  NOT?: LifeJourneyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => EnumLifeJourneysFilter, {
    nullable: true
  })
  id?: EnumLifeJourneysFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  users?: UserListRelationFilter | undefined;
}
