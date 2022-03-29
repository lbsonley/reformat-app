import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyTalentEnergyInputEnvelope } from "../inputs/UserCreateManyTalentEnergyInputEnvelope";
import { UserCreateOrConnectWithoutTalentEnergyInput } from "../inputs/UserCreateOrConnectWithoutTalentEnergyInput";
import { UserCreateWithoutTalentEnergyInput } from "../inputs/UserCreateWithoutTalentEnergyInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutTalentEnergyInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutTalentEnergyInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutTalentEnergyInput], {
    nullable: true
  })
  create?: UserCreateWithoutTalentEnergyInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutTalentEnergyInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTalentEnergyInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyTalentEnergyInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyTalentEnergyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
