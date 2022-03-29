import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LifeJourneyUpdateManyMutationInput } from "../../../inputs/LifeJourneyUpdateManyMutationInput";
import { LifeJourneyWhereInput } from "../../../inputs/LifeJourneyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLifeJourneyArgs {
  @TypeGraphQL.Field(_type => LifeJourneyUpdateManyMutationInput, {
    nullable: false
  })
  data!: LifeJourneyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LifeJourneyWhereInput, {
    nullable: true
  })
  where?: LifeJourneyWhereInput | undefined;
}
