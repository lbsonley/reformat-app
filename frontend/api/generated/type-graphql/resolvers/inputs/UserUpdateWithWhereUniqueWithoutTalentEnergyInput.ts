import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutTalentEnergyInput } from "../inputs/UserUpdateWithoutTalentEnergyInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutTalentEnergyInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutTalentEnergyInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTalentEnergyInput, {
    nullable: false
  })
  data!: UserUpdateWithoutTalentEnergyInput;
}
