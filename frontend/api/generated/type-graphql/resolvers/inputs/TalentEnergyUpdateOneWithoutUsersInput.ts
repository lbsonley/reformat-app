import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentEnergyCreateOrConnectWithoutUsersInput } from "../inputs/TalentEnergyCreateOrConnectWithoutUsersInput";
import { TalentEnergyCreateWithoutUsersInput } from "../inputs/TalentEnergyCreateWithoutUsersInput";
import { TalentEnergyUpdateWithoutUsersInput } from "../inputs/TalentEnergyUpdateWithoutUsersInput";
import { TalentEnergyUpsertWithoutUsersInput } from "../inputs/TalentEnergyUpsertWithoutUsersInput";
import { TalentEnergyWhereUniqueInput } from "../inputs/TalentEnergyWhereUniqueInput";

@TypeGraphQL.InputType("TalentEnergyUpdateOneWithoutUsersInput", {
  isAbstract: true
})
export class TalentEnergyUpdateOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => TalentEnergyCreateWithoutUsersInput, {
    nullable: true
  })
  create?: TalentEnergyCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => TalentEnergyCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: TalentEnergyCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => TalentEnergyUpsertWithoutUsersInput, {
    nullable: true
  })
  upsert?: TalentEnergyUpsertWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TalentEnergyWhereUniqueInput, {
    nullable: true
  })
  connect?: TalentEnergyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TalentEnergyUpdateWithoutUsersInput, {
    nullable: true
  })
  update?: TalentEnergyUpdateWithoutUsersInput | undefined;
}
