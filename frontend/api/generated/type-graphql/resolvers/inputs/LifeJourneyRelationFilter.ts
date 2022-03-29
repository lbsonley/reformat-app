import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LifeJourneyWhereInput } from "../inputs/LifeJourneyWhereInput";

@TypeGraphQL.InputType("LifeJourneyRelationFilter", {
  isAbstract: true
})
export class LifeJourneyRelationFilter {
  @TypeGraphQL.Field(_type => LifeJourneyWhereInput, {
    nullable: true
  })
  is?: LifeJourneyWhereInput | undefined;

  @TypeGraphQL.Field(_type => LifeJourneyWhereInput, {
    nullable: true
  })
  isNot?: LifeJourneyWhereInput | undefined;
}
