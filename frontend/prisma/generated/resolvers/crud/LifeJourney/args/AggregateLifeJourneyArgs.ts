import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LifeJourneyOrderByWithRelationInput } from "../../../inputs/LifeJourneyOrderByWithRelationInput";
import { LifeJourneyWhereInput } from "../../../inputs/LifeJourneyWhereInput";
import { LifeJourneyWhereUniqueInput } from "../../../inputs/LifeJourneyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLifeJourneyArgs {
  @TypeGraphQL.Field(_type => LifeJourneyWhereInput, {
    nullable: true
  })
  where?: LifeJourneyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LifeJourneyOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LifeJourneyOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LifeJourneyWhereUniqueInput, {
    nullable: true
  })
  cursor?: LifeJourneyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
