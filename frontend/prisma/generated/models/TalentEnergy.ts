import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { TalentEnergies } from "../enums/TalentEnergies";
import { TalentEnergyCount } from "../resolvers/outputs/TalentEnergyCount";

@TypeGraphQL.ObjectType("TalentEnergy", {
  isAbstract: true
})
export class TalentEnergy {
  @TypeGraphQL.Field(_type => TalentEnergies, {
    nullable: false
  })
  id!: "push" | "neutral" | "pull";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  users?: User[];

  @TypeGraphQL.Field(_type => TalentEnergyCount, {
    nullable: true
  })
  _count?: TalentEnergyCount | null;
}
