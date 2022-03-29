import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LifeJourneyCreateWithoutUsersInput } from "../inputs/LifeJourneyCreateWithoutUsersInput";
import { LifeJourneyUpdateWithoutUsersInput } from "../inputs/LifeJourneyUpdateWithoutUsersInput";

@TypeGraphQL.InputType("LifeJourneyUpsertWithoutUsersInput", {
  isAbstract: true
})
export class LifeJourneyUpsertWithoutUsersInput {
  @TypeGraphQL.Field(_type => LifeJourneyUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: LifeJourneyUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => LifeJourneyCreateWithoutUsersInput, {
    nullable: false
  })
  create!: LifeJourneyCreateWithoutUsersInput;
}
