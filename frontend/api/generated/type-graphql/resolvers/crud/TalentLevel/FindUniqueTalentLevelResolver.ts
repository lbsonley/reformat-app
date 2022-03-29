import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTalentLevelArgs } from "./args/FindUniqueTalentLevelArgs";
import { TalentLevel } from "../../../models/TalentLevel";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TalentLevel)
export class FindUniqueTalentLevelResolver {
  @TypeGraphQL.Query(_returns => TalentLevel, {
    nullable: true
  })
  async talentLevel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTalentLevelArgs): Promise<TalentLevel | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).talentLevel.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
