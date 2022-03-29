import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TalentLevelCreateInput } from "../../../inputs/TalentLevelCreateInput";
import { TalentLevelUpdateInput } from "../../../inputs/TalentLevelUpdateInput";
import { TalentLevelWhereUniqueInput } from "../../../inputs/TalentLevelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTalentLevelArgs {
  @TypeGraphQL.Field(_type => TalentLevelWhereUniqueInput, {
    nullable: false
  })
  where!: TalentLevelWhereUniqueInput;

  @TypeGraphQL.Field(_type => TalentLevelCreateInput, {
    nullable: false
  })
  create!: TalentLevelCreateInput;

  @TypeGraphQL.Field(_type => TalentLevelUpdateInput, {
    nullable: false
  })
  update!: TalentLevelUpdateInput;
}
