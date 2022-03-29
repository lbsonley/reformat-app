import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArchetypeOrderByWithRelationInput } from "../inputs/ArchetypeOrderByWithRelationInput";
import { LifeJourneyOrderByWithRelationInput } from "../inputs/LifeJourneyOrderByWithRelationInput";
import { TalentEnergyOrderByWithRelationInput } from "../inputs/TalentEnergyOrderByWithRelationInput";
import { TalentLevelOrderByWithRelationInput } from "../inputs/TalentLevelOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  firstName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  animal?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  archetypeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ArchetypeOrderByWithRelationInput, {
    nullable: true
  })
  archetype?: ArchetypeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lifeJourneyId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LifeJourneyOrderByWithRelationInput, {
    nullable: true
  })
  lifeJourney?: LifeJourneyOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  talent?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  talentLevelId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TalentLevelOrderByWithRelationInput, {
    nullable: true
  })
  talentLevel?: TalentLevelOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  talentEnergyId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TalentEnergyOrderByWithRelationInput, {
    nullable: true
  })
  talentEnergy?: TalentEnergyOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  heroJourneyProgress?: "asc" | "desc" | undefined;
}
