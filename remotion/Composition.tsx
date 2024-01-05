import { AbsoluteFill } from 'remotion';
import { Logo } from './Logo';
import { Subtitle } from './Subtitle';
import { Title } from './Title';
import { z } from 'zod';
import { zColor } from '@remotion/zod-types';
import { CompositionProps } from '@/types/constants';

export const myCompSchema = z.object({
  titleText: z.string(),
  titleColor: zColor(),
  logoColor: zColor(),
});

export const MyComposition = ({ title }: z.infer<typeof CompositionProps>) => {
  return (
    <AbsoluteFill className='bg-gray-100 items-center justify-center'>
      <div className='m-10' />
      <Logo logoColor={'blue-500'} />
      <div className='m-3' />
      <Title titleText={'red-500'} titleColor={'green-500'} />
      <Subtitle />
    </AbsoluteFill>
  );
};
