import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TalentLevelUpdateInput } from "../../../inputs/TalentLevelUpdateInput";
import { TalentLevelWhereUniqueInput } from "../../../inputs/TalentLevelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTalentLevelArgs {
  @TypeGraphQL.Field(_type => TalentLevelUpdateInput, {
    nullable: false
  })
  data!: TalentLevelUpdateInput;

  @TypeGraphQL.Field(_type => TalentLevelWhereUniqueInput, {
    nullable: false
  })
  where!: TalentLevelWhereUniqueInput;
}
