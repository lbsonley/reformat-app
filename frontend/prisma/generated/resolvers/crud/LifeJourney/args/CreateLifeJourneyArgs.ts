import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LifeJourneyCreateInput } from "../../../inputs/LifeJourneyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateLifeJourneyArgs {
  @TypeGraphQL.Field(_type => LifeJourneyCreateInput, {
    nullable: false
  })
  data!: LifeJourneyCreateInput;
}
