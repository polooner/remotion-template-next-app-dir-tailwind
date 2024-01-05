'use client';

import { MyComposition } from '@/remotion/Composition';
import { CompositionProps, defaultMyCompProps } from '@/types/constants';
import { Player } from '@remotion/player';
import { useMemo, useState } from 'react';

export default function Home() {
  const [text, setText] = useState<string>(defaultMyCompProps.title);
  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      title: text,
    };
  }, [text]);
  return (
    <div>
      player
      <Player
        inputProps={inputProps}
        className='border-white border-2'
        component={MyComposition}
        durationInFrames={120}
        compositionWidth={720}
        compositionHeight={720}
        fps={30}
        controls
        autoPlay
        loop
      />
    </div>
  );
}
