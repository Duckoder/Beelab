import Header from '~/components/Layout/components/Header';
import SearchBar from '~/components/Layout/components/SearchBar';

function DefaultLayout({ children }) {
  return (
    <div>
      <SearchBar />
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
