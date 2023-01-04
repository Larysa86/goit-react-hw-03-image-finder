import { RotatingLines } from 'react-loader-spinner';
import { LoadContainer } from './Loader.styled';

export const Loader = () => (
  <LoadContainer>
    <RotatingLines
        strokeColor='grey'
        strokeWidth='5'
        animationDuration='0.75'
        width='96'
        visible={true}
      />
  </LoadContainer>
);

export default Loader;
