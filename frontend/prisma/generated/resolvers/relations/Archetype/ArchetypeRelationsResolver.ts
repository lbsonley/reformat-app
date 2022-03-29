import * as TypeGraphQL from "type-graphql";
import { Archetype } from "../../../models/Archetype";
import { User } from "../../../models/User";
import { ArchetypeUsersArgs } from "./args/ArchetypeUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Archetype)
export class ArchetypeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() archetype: Archetype, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ArchetypeUsersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).archetype.findUnique({
      where: {
        id: archetype.id,
      },
    }).users(args);
  }
}
