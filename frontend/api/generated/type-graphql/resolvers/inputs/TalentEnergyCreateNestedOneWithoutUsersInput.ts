import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentEnergyCreateOrConnectWithoutUsersInput } from "../inputs/TalentEnergyCreateOrConnectWithoutUsersInput";
import { TalentEnergyCreateWithoutUsersInput } from "../inputs/TalentEnergyCreateWithoutUsersInput";
import { TalentEnergyWhereUniqueInput } from "../inputs/TalentEnergyWhereUniqueInput";

@TypeGraphQL.InputType("TalentEnergyCreateNestedOneWithoutUsersInput", {
  isAbstract: true
})
export class TalentEnergyCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => TalentEnergyCreateWithoutUsersInput, {
    nullable: true
  })
  create?: TalentEnergyCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => TalentEnergyCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: TalentEnergyCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => TalentEnergyWhereUniqueInput, {
    nullable: true
  })
  connect?: TalentEnergyWhereUniqueInput | undefined;
}
