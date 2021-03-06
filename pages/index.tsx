import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { styled } from '../styles';

const Root = styled('div', {
  display: 'grid',
  placeContent: 'center',
  height: '100vh'
});

const ShareLink = styled('a', {
  display: 'grid',
  gridAutoFlow: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gridGap: '1.2rem',
  padding: '1.2rem 3.2rem',
  fontSize: '1.8rem',
  borderRadius: '1.2rem',
  background: '$clashroyale',

  svg: {
    fontSize: '2rem',
    lineHeight: 0
  }
});

const IClashRoyale = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width='1.4em'
    height='1.4em'
    viewBox='0 0 48 48'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill='#603813'
      d='m41 35-2 2.052L22 46 7 38l-1-.6-.068-27.402L7 8h9l8-6 8 6h9z'
    />
    <path fill='#448aff' d='M41 33 24 43 7 35V8h9l8-6 8 6h9z' />
    <path
      fill='#0d47a1'
      d='m25 8 5.6 4.2 1.067.8H37v19.661l-12.058 8.191L12 34V13h6.333l1.067-.8L25 8m0-5-8 6H8v26l17 8 16-8V9h-8l-8-6z'
    />
    <path
      fill='#0d47a1'
      d='M36.029 16.497 37 33c-7.08 1.905-13.806 1.606-20-2l-.5-16 3.5 4 8-2 5 1 1.5-3 1.086.724c.261.174.425.46.443.773z'
    />
    <path
      fill='#ffb300'
      d='m24 7 5.6 4.2 1.067.8H37v20.592l-13 6.882-13-6.882V12h6.333l1.067-.8L24 7m0-5-8 6H7v27l17 9 17-9V8h-9l-8-6z'
    />
    <path
      fill='#f57f17'
      d='M14.89 20h3l-.92-4.598a.498.498 0 0 0-.49-.402H14.5a.5.5 0 0 0-.49.598L14.89 20z'
    />
    <path
      fill='#fffde7'
      d='M34.11 20h-3l.92-4.598a.498.498 0 0 1 .49-.402h1.98a.5.5 0 0 1 .49.598L34.11 20z'
    />
    <path
      fill='#ffb300'
      d='M33.377 18.34a1 1 0 0 1-1.117.465 22.827 22.827 0 0 0-1.271-.275 1 1 0 0 1-.791-.738l-1.029-4.114a1.009 1.009 0 0 0-.863-.759 30.907 30.907 0 0 0-6.613 0 1.005 1.005 0 0 0-.862.759l-.984 3.937a1.001 1.001 0 0 1-.829.745c-.748.111-1.507.256-2.279.447a1.001 1.001 0 0 1-1.116-.465L14 15.5l.454 7.033 6.03.467h8.032l6.03-.468L35 15.5l-1.623 2.84z'
    />
    <ellipse cx={24.5} cy={22.5} fill='#e65100' rx={10} ry={1.5} />
    <path
      fill='#ffb300'
      d='M34.5 24c0-.828-4.477-1.5-10-1.5s-10 .672-10 1.5l1 6.5 9-.474 9 .474 1-6.5z'
    />
    <ellipse cx={24.5} cy={30.5} fill='#e65100' rx={9} ry={1.5} />
    <path fill='#fffde7' d='M22.235 25.5 25 22.735l2.765 2.765L25 28.265z' />
    <ellipse cx={24.5} cy={31.333} fill='#0d47a1' rx={7} ry={1} />
    <path fill='#f57f17' d='M27.765 25.5 25 28.265 22.235 25.5z' />
    <path fill='#f57f17' d='M27.765 25.5 25 28.265v-5.53z' />
    <path fill='#e65100' d='M27.765 25.5 25 28.265V25.5z' />
    <path fill='#fdd835' d='M23.61 25.5 25 24.11l1.389 1.39-1.39 1.39z' />
    <path
      fill='#ffb300'
      d='m24 4.5 6.8 5.1.533.4H39v23.796l-15 7.941-15-7.941V10h7.667l.533-.4L24 4.5M24 2l-8 6H7v27l17 9 17-9V8h-9l-8-6z'
    />
    <path fill='#fdd835' d='m37 32.5 2 1.5V10l-2 2z' />
    <path fill='#f57f17' d='M17.333 12H11l-2-2h7.333z' />
    <path fill='#e65100' d='m41 33-17 8.75V44l17-9z' />
    <path fill='#e65100' d='m39 34 2 1V8l-2 2z' />
    <path fill='#f57f17' d='M30.667 12H37l2-2h-7.333z' />
    <path fill='#e65100' d='M24 4.5 16.333 10l1 2L24 7z' />
    <path fill='#f57f17' d='m7 33 17 8.75V44L7 35z' />
    <path fill='#fdd835' d='m9 34-2 1V8l2 2z' />
    <path fill='#e65100' d='M11 32.5 9 34V10l2 2z' />
    <path fill='#f57f17' d='m24 4.5 7.667 5.5-1 2L24 7z' />
  </svg>
);

const Home: NextPage<{ sharedURL: string }> = ({ sharedURL }) => {
  return (
    <>
      <Head>
        <title>Share Clash</title>
      </Head>
      <Root>
        <Link href={sharedURL} passHref>
          <ShareLink target='_blank' rel='noopener noreferrer'>
            <IClashRoyale />
            Clash Royale
          </ShareLink>
        </Link>
      </Root>
    </>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async ctx => ({
  props: {
    sharedURL: ctx.query?.sharedURL ?? 'https://clashroyale.com/pt/'
  }
});
