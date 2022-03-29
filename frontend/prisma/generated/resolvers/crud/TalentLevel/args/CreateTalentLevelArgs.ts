import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TalentLevelCreateInput } from "../../../inputs/TalentLevelCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTalentLevelArgs {
  @TypeGraphQL.Field(_type => TalentLevelCreateInput, {
    nullable: false
  })
  data!: TalentLevelCreateInput;
}
