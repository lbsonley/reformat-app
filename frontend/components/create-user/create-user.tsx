import React from 'react';
import { useMutation, gql } from '@apollo/client';
import { Field, Form } from 'react-final-form';
import { Container, Row, Col } from 'react-grid-system';
import {
  Archetypes,
  LifeJourneys,
  TalentEnergies,
  Languages,
  Modules,
} from '../../types/schema';

const CREATE_USER = gql`
  mutation CreateUser($data: UserCreateInput!) {
    createUser(data: $data) {
      id
      email
      firstName
      lastName
      language
      activeStudent
      profile {
        animal
        archetypeId
        lifeJourneyId
        talent
        talentEnergyId
        currentModule
      }
    }
  }
`;

const CreateUser = () => {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  const onSubmit = async (values: any) => {
    const {
      firstName,
      lastName,
      email,
      language,
      activeStudent,
      currentModule,
      animal,
      talent,
      archetype,
      lifeJourney,
      talentEnergy,
    } = values;

    createUser({
      variables: {
        data: {
          firstName,
          lastName,
          email,
          language,
          activeStudent,
          profile: {
            create: {
              currentModule,
              animal,
              talent,
              archetype: {
                connectOrCreate: {
                  where: {
                    id: archetype,
                  },
                  create: {
                    id: archetype,
                    name: archetype.toUpperCase(),
                  },
                },
              },
              lifeJourney: {
                createOrConnect: {
                  where: {
                    id: lifeJourney,
                  },
                  create: {
                    id: lifeJourney,
                    name: lifeJourney.toUpperCase(),
                  },
                },
              },
              talentEnergy: {
                createOrConnect: {
                  where: {
                    id: talentEnergy,
                  },
                  create: {
                    id: talentEnergy,
                    name: talentEnergy.toUpperCase(),
                  },
                },
              },
            },
          },
        },
      },
    });
  };

  return (
    <>
      <h1>Create User</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Container>
              <Row>
                <Col xs={12}>
                  <h2>Personal Information</h2>
                </Col>
                <Col xs={12} md={4}>
                  <Field name="firstName">
                    {({ input }) => (
                      <>
                        <label htmlFor="first-name">First Name</label>
                        <input id="first-name" type="text" {...input} />
                      </>
                    )}
                  </Field>
                </Col>
                <Col xs={12} md={4}>
                  <Field name="lastName">
                    {({ input }) => (
                      <>
                        <label htmlFor="last-name">Last Name</label>
                        <input id="last-name" type="text" {...input} />
                      </>
                    )}
                  </Field>
                </Col>
                <Col xs={12} md={4}>
                  <Field name="email">
                    {({ input }) => (
                      <>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" {...input} />
                      </>
                    )}
                  </Field>
                </Col>
                <Col xs={12} md={4}>
                  <Field name="language">
                    {({ input }) => (
                      <>
                        <label htmlFor="language">Language</label>
                        <select id="language" type="text" {...input}>
                          <option value=""></option>
                          {Object.keys(Languages).map((language) => (
                            <option value={language} key={language}>
                              {language}
                            </option>
                          ))}
                        </select>
                      </>
                    )}
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <h2>Basic Information</h2>
                </Col>
                <Col xs={12}>
                  <Field name="activeStudent">
                    {({ input }) => (
                      <>
                        <input type="checkbox" {...input} />
                        <label htmlFor="active-student">Active Student</label>
                      </>
                    )}
                  </Field>
                </Col>
                <Col xs={12} md={4}>
                  <Field name="currentModule">
                    {({ input }) => (
                      <>
                        <label htmlFor="current-module">Current Module</label>
                        <select id="current-module" {...input}>
                          <option value=""></option>
                          {Object.keys(Modules).map((module) => (
                            <option value={module} key={module}>
                              {module}
                            </option>
                          ))}
                        </select>
                      </>
                    )}
                  </Field>
                </Col>
                <Col xs={12} md={4}>
                  <Field name="animal">
                    {({ input }) => (
                      <>
                        <label htmlFor="animal">Animal</label>
                        <input id="animal" {...input} />
                      </>
                    )}
                  </Field>
                </Col>
                <Col xs={12} md={4}>
                  <Field name="archetype">
                    {({ input }) => (
                      <>
                        <label htmlFor="archetype">Archetype</label>
                        <select id="archetype" {...input}>
                          <option value=""></option>
                          {Object.keys(Archetypes).map((archetype) => (
                            <option value={archetype} key={archetype}>
                              {archetype}
                            </option>
                          ))}
                        </select>
                      </>
                    )}
                  </Field>
                </Col>
                <Col xs={12} md={4}>
                  <Field name="lifeJourney">
                    {({ input }) => (
                      <>
                        <label htmlFor="life-journey">Life Journey</label>
                        <select id="life-journey" {...input}>
                          <option value=""></option>
                          {Object.keys(LifeJourneys).map((lifeJourney) => (
                            <option value={lifeJourney} key={lifeJourney}>
                              {lifeJourney}
                            </option>
                          ))}
                        </select>
                      </>
                    )}
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <h2>Talent Information</h2>
                </Col>
                <Col xs={12}>
                  <Field name="talent">
                    {({ input }) => (
                      <>
                        <label htmlFor="talent">Talent</label>
                        <textarea id="talent" {...input} />
                      </>
                    )}
                  </Field>
                </Col>
                <Col xs={12} md={4}>
                  <Field name="talentEnergy">
                    {({ input }) => (
                      <>
                        <label htmlFor="talent-energy">Talent Energy</label>
                        <select id="talent-energy" {...input}>
                          <option value=""></option>
                          {Object.keys(TalentEnergies).map((talentEnergy) => (
                            <option value={talentEnergy} key={talentEnergy}>
                              {talentEnergy}
                            </option>
                          ))}
                        </select>
                      </>
                    )}
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <button type="submit">Submit</button>
                </Col>
              </Row>
            </Container>
          </form>
        )}
      />
      {error ? <pre>{JSON.stringify(error, null, 2)}</pre> : null}
    </>
  );
};

export default CreateUser;
