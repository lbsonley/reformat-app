import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentEnergyCreateWithoutUsersInput } from "../inputs/TalentEnergyCreateWithoutUsersInput";
import { TalentEnergyWhereUniqueInput } from "../inputs/TalentEnergyWhereUniqueInput";

@TypeGraphQL.InputType("TalentEnergyCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class TalentEnergyCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => TalentEnergyWhereUniqueInput, {
    nullable: false
  })
  where!: TalentEnergyWhereUniqueInput;

  @TypeGraphQL.Field(_type => TalentEnergyCreateWithoutUsersInput, {
    nullable: false
  })
  create!: TalentEnergyCreateWithoutUsersInput;
}
