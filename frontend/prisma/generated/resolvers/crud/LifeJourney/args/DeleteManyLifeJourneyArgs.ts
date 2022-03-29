import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LifeJourneyWhereInput } from "../../../inputs/LifeJourneyWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLifeJourneyArgs {
  @TypeGraphQL.Field(_type => LifeJourneyWhereInput, {
    nullable: true
  })
  where?: LifeJourneyWhereInput | undefined;
}
