export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  profile?: Profile;
}

export interface Profile {
  id: string;
  user?: User;
  userId?: string;
  activeStudent: boolean;
  language: Languages;
  animal?: string;
  archetypeId?: Archetypes;
  archetype?: Archetype;
  lifeJourneyId?: LifeJourneys;
  lifeJourney?: LifeJourney;
  talent?: string;
  talentLevelId?: TalentLevels;
  talentLevel?: TalentLevel;
  talentEnergyId?: TalentEnergies;
  talentEnergy?: TalentEnergy;
  currentModule?: Modules;
}

export interface Archetype {
  id: Archetypes;
  name: string;
  users?: Profile[];
}

export interface LifeJourney {
  id: LifeJourneys;
  name: string;
  users?: Profile[];
}

export interface TalentLevel {
  id: TalentLevels;
  name: string;
  users?: Profile[];
}

export interface TalentEnergy {
  id: TalentEnergies;
  name: string;
  users?: Profile[];
}

export enum Modules {
  first = 'first',
  second = 'second',
  third = 'third',
}

export enum Archetypes {
  mentor = 'mentor',
  herald = 'herald',
  gatekeeper = 'gatekeeper',
  joker = 'joker',
}

export enum LifeJourneys {
  learn = 'learn',
  stand = 'stand',
  resolve = 'resolve',
}

export enum TalentLevels {
  ego = 'ego',
  emotion = 'emotion',
  tao = 'tao',
}

export enum TalentEnergies {
  push = 'push',
  neutral = 'neutral',
  pull = 'pull',
}

export enum Languages {
  de = 'de',
  en = 'en',
  fr = 'fr',
  it = 'it',
}
