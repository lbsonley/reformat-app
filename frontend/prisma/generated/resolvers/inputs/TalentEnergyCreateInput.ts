import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutTalentEnergyInput } from "../inputs/UserCreateNestedManyWithoutTalentEnergyInput";
import { TalentEnergies } from "../../enums/TalentEnergies";

@TypeGraphQL.InputType("TalentEnergyCreateInput", {
  isAbstract: true
})
export class TalentEnergyCreateInput {
  @TypeGraphQL.Field(_type => TalentEnergies, {
    nullable: false
  })
  id!: "push" | "neutral" | "pull";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutTalentEnergyInput, {
    nullable: true
  })
  users?: UserCreateNestedManyWithoutTalentEnergyInput | undefined;
}
