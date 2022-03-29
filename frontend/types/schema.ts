export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
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
  heroJourneyProgress?: Archetypes;
}

export interface Archetype {
  id: Archetypes;
  name: string;
  users?: User[];
}

export interface LifeJourney {
  id: LifeJourneys;
  name: string;
  users?: User[];
}

export interface TalentLevel {
  id: TalentLevels;
  name: string;
  users?: User[];
}

export interface TalentEnergy {
  id: TalentEnergies;
  name: string;
  users?: User[];
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
