import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentEnergyCreateWithoutUsersInput } from "../inputs/TalentEnergyCreateWithoutUsersInput";
import { TalentEnergyUpdateWithoutUsersInput } from "../inputs/TalentEnergyUpdateWithoutUsersInput";

@TypeGraphQL.InputType("TalentEnergyUpsertWithoutUsersInput", {
  isAbstract: true
})
export class TalentEnergyUpsertWithoutUsersInput {
  @TypeGraphQL.Field(_type => TalentEnergyUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: TalentEnergyUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => TalentEnergyCreateWithoutUsersInput, {
    nullable: false
  })
  create!: TalentEnergyCreateWithoutUsersInput;
}
