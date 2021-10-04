import React from 'react';
import { Card } from './components/Card';
import { GlobalStye, Conteiner, Content } from './global';
import photo1 from './assets/images/image-daniel.jpg';
import photo2 from './assets/images/image-jonathan.jpg';
import photo3 from './assets/images/image-jeanette.jpg';

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

          <Card
            background="#fff"
            height="22.3"
            photo={photo3}
            name={['Jeanette Harmon', '#515A6B']}
            verified={true}
            tittle={[
              'An overall wonderful and rewarding experience',
              '#19212E',
            ]}
          >
            Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love.
          </Card>
        </Content>
      </Conteiner>
    </>
  );
}

export default App;
