import React from 'react';
import type { Route } from '../+types/root';
import ChallengesContextProvider from '~/store/challenges-context';
import Challenges from '~/components/Challenges';
import Header from '~/components/Header';

const ChallengesPage = () => {
  return (
    <div>
      <ChallengesContextProvider>
        <Header />
        <main>
          <Challenges />
        </main>
      </ChallengesContextProvider>
    </div>
  );
};

export default ChallengesPage;
