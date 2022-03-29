import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TalentLevelCreateManyInput } from "../../../inputs/TalentLevelCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTalentLevelArgs {
  @TypeGraphQL.Field(_type => [TalentLevelCreateManyInput], {
    nullable: false
  })
  data!: TalentLevelCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
