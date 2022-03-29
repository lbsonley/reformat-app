import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LifeJourneyUpdateInput } from "../../../inputs/LifeJourneyUpdateInput";
import { LifeJourneyWhereUniqueInput } from "../../../inputs/LifeJourneyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateLifeJourneyArgs {
  @TypeGraphQL.Field(_type => LifeJourneyUpdateInput, {
    nullable: false
  })
  data!: LifeJourneyUpdateInput;

  @TypeGraphQL.Field(_type => LifeJourneyWhereUniqueInput, {
    nullable: false
  })
  where!: LifeJourneyWhereUniqueInput;
}
