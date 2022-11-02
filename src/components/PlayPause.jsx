import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, handlePause, handlePlay, song }) => (isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle className="text-gray-300" size={35} onClick={handlePause} />
) : (
  <FaPlayCircle className="text-gray-300" size={35} onClick={handlePlay} />
));

export default PlayPause;
