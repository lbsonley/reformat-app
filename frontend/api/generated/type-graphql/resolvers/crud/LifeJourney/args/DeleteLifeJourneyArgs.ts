import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LifeJourneyWhereUniqueInput } from "../../../inputs/LifeJourneyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteLifeJourneyArgs {
  @TypeGraphQL.Field(_type => LifeJourneyWhereUniqueInput, {
    nullable: false
  })
  where!: LifeJourneyWhereUniqueInput;
}
