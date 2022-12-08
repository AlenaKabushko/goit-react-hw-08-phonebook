import Box from 'components/Box';
import { FcSimCard } from 'react-icons/fc';

function Home() {
  return (
    <Box flexDirection="column">
      <FcSimCard size={200} />
      <h1>Your personal phonebook</h1>
    </Box>
  );
}

export default Home;
