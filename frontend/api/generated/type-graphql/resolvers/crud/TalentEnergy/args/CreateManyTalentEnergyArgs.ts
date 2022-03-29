import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TalentEnergyCreateManyInput } from "../../../inputs/TalentEnergyCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTalentEnergyArgs {
  @TypeGraphQL.Field(_type => [TalentEnergyCreateManyInput], {
    nullable: false
  })
  data!: TalentEnergyCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
