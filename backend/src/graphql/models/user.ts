import { Languages } from '@prisma/client';
import { Field, ID, ObjectType } from 'type-graphql';
/* eslint-disable-next-line import/no-cycle */
import Profile from './profile';

@ObjectType({ description: 'the user' })
class User {
  @Field(() => ID)
  id: string;

  @Field({ description: "the user's email address" })
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  language: Languages;

  @Field({ nullable: true })
  activeStudent?: boolean;

  @Field(() => Profile, { nullable: true })
  profile?: Profile;
}

export default User;
