import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTalentEnergyInput } from "../inputs/UserCreateWithoutTalentEnergyInput";
import { UserUpdateWithoutTalentEnergyInput } from "../inputs/UserUpdateWithoutTalentEnergyInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutTalentEnergyInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutTalentEnergyInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTalentEnergyInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTalentEnergyInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTalentEnergyInput, {
    nullable: false
  })
  create!: UserCreateWithoutTalentEnergyInput;
}
