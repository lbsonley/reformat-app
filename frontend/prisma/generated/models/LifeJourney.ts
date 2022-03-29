import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { LifeJourneys } from "../enums/LifeJourneys";
import { LifeJourneyCount } from "../resolvers/outputs/LifeJourneyCount";

@TypeGraphQL.ObjectType("LifeJourney", {
  isAbstract: true
})
export class LifeJourney {
  @TypeGraphQL.Field(_type => LifeJourneys, {
    nullable: false
  })
  id!: "learn" | "stand" | "resolve";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  users?: User[];

  @TypeGraphQL.Field(_type => LifeJourneyCount, {
    nullable: true
  })
  _count?: LifeJourneyCount | null;
}
