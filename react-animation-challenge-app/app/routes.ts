import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/WelcomePage.tsx'),
  route('challenges', './routes/ChallengesPage.tsx'),
] satisfies RouteConfig;
