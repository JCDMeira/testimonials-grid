import React from 'react';
import { Card } from './components/Card';
import { GlobalStye, Conteiner, Content } from './global';
import photo1 from './assets/images/image-daniel.jpg';
import photo2 from './assets/images/image-jonathan.jpg';

function App() {
  return (
    <>
      <GlobalStye />
      <Conteiner>
        <Content>
          <Card
            background="#7541C8"
            height="44.4"
            first={true}
            photo={photo1}
            name={['Daniel Clifford', '#ECF2F8']}
            verified={true}
            tittle={[
              'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
              '#FFFFFF',
            ]}
          >
            I was an EMT for many years before I joined the bootcamp. I’ve been
            looking to make a transition and have heard some people who had an
            amazing experience here. I signed up for the free intro course and
            found it incredibly fun! I enrolled shortly thereafter. The next 12
            weeks was the best - and most grueling - time of my life. Since
            completing the course, I’ve successfully switched careers, working
            as a Software Engineer at a VR startup.
          </Card>

          <Card
            background="#48556A"
            height="24"
            photo={photo2}
            name={['Jonathan Walters', '#ECF2F8']}
            verified={true}
            tittle={[
              'The team was very supportive and kept me motivated',
              '#FFFFFF',
            ]}
          >
            I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineerfor a big company. This was one of the best
            investments I’ve made in myself.
          </Card>
        </Content>
      </Conteiner>
    </>
  );
}

export default App;
