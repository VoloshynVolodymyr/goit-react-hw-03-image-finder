import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderWrapper>
      <ThreeDots color="#3f51b5" height={80} width={80} />
    </LoaderWrapper>
  );
}