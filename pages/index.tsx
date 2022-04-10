import CatCard from '../components/cards/cat/CatCard';
import { mockCatCardProps } from '../components/cards/cat/CatCard.mocks';
import Primary from '../components/layouts/primary/Primary';
import SideBar from '../components/layouts/sidebar/SideBar';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <CatCard {...mockCatCardProps.base} />
    </section>
  );
};

export default Home;

// # 레이아웃을 적용한다
Home.getLayout = (page) => {
  return (
    <Primary>
      <SideBar />
      {page}
    </Primary>
  );
};
