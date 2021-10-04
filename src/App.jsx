import React from 'react';
import { Card } from './components/Card';
import { GlobalStye, Conteiner, Content } from './global';
import photo1 from './assets/images/image-daniel.jpg';
import photo2 from './assets/images/image-jonathan.jpg';
import photo3 from './assets/images/image-jeanette.jpg';
import photo4 from './assets/images/image-patrick.jpg';

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

          <Card
            background="#19212E"
            height="38.4"
            photo={photo4}
            name={['Patrick Abrams', '#ECF2F8']}
            verified={true}
            tittle={[
              'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidancefrom them and learning from their experiences was easy.',
              '#FFFFFF',
            ]}
          >
            The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people.
          </Card>
        </Content>
      </Conteiner>
    </>
  );
}

export default App;
