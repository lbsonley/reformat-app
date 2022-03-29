import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LifeJourneyCreateManyInput } from "../../../inputs/LifeJourneyCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLifeJourneyArgs {
  @TypeGraphQL.Field(_type => [LifeJourneyCreateManyInput], {
    nullable: false
  })
  data!: LifeJourneyCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
