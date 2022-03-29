import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TalentLevelWhereUniqueInput } from "../../../inputs/TalentLevelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTalentLevelArgs {
  @TypeGraphQL.Field(_type => TalentLevelWhereUniqueInput, {
    nullable: false
  })
  where!: TalentLevelWhereUniqueInput;
}
