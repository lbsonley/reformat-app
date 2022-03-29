import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LifeJourneyCreateInput } from "../../../inputs/LifeJourneyCreateInput";
import { LifeJourneyUpdateInput } from "../../../inputs/LifeJourneyUpdateInput";
import { LifeJourneyWhereUniqueInput } from "../../../inputs/LifeJourneyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertLifeJourneyArgs {
  @TypeGraphQL.Field(_type => LifeJourneyWhereUniqueInput, {
    nullable: false
  })
  where!: LifeJourneyWhereUniqueInput;

  @TypeGraphQL.Field(_type => LifeJourneyCreateInput, {
    nullable: false
  })
  create!: LifeJourneyCreateInput;

  @TypeGraphQL.Field(_type => LifeJourneyUpdateInput, {
    nullable: false
  })
  update!: LifeJourneyUpdateInput;
}
