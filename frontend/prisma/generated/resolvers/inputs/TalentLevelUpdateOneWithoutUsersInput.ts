import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TalentLevelCreateOrConnectWithoutUsersInput } from "../inputs/TalentLevelCreateOrConnectWithoutUsersInput";
import { TalentLevelCreateWithoutUsersInput } from "../inputs/TalentLevelCreateWithoutUsersInput";
import { TalentLevelUpdateWithoutUsersInput } from "../inputs/TalentLevelUpdateWithoutUsersInput";
import { TalentLevelUpsertWithoutUsersInput } from "../inputs/TalentLevelUpsertWithoutUsersInput";
import { TalentLevelWhereUniqueInput } from "../inputs/TalentLevelWhereUniqueInput";

@TypeGraphQL.InputType("TalentLevelUpdateOneWithoutUsersInput", {
  isAbstract: true
})
export class TalentLevelUpdateOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => TalentLevelCreateWithoutUsersInput, {
    nullable: true
  })
  create?: TalentLevelCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => TalentLevelCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: TalentLevelCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => TalentLevelUpsertWithoutUsersInput, {
    nullable: true
  })
  upsert?: TalentLevelUpsertWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TalentLevelWhereUniqueInput, {
    nullable: true
  })
  connect?: TalentLevelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TalentLevelUpdateWithoutUsersInput, {
    nullable: true
  })
  update?: TalentLevelUpdateWithoutUsersInput | undefined;
}
