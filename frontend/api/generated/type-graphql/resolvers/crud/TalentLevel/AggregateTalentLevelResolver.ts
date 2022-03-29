import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTalentLevelArgs } from "./args/AggregateTalentLevelArgs";
import { TalentLevel } from "../../../models/TalentLevel";
import { AggregateTalentLevel } from "../../outputs/AggregateTalentLevel";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TalentLevel)
export class AggregateTalentLevelResolver {
  @TypeGraphQL.Query(_returns => AggregateTalentLevel, {
    nullable: false
  })
  async aggregateTalentLevel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTalentLevelArgs): Promise<AggregateTalentLevel> {
    return getPrismaFromContext(ctx).talentLevel.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
