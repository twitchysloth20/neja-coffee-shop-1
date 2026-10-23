import type { ReactNode } from 'react';

interface IMobileNavProps {
  children: ReactNode;
  njFullscreen?: boolean;
  njShow?: boolean;
}

export default function MobileNav(props: IMobileNavProps) {
  const { children, njFullscreen, njShow } = props;

  const fsClass: string = njFullscreen ? 'fullscreen' : '';

  return (
    <>
      {
        njShow &&
        <div className={`nj-mobile-nav ${fsClass}`}>
          { children }
        </div>
      }
    </>
  );
}
