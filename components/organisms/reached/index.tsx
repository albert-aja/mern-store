import ReachedText from '../../molecules/reached-text';
import ReachedSeparator from './reached-separator';

export default function index() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedText title="290M+" desc="Players Top Up" />
          <ReachedSeparator />
          <ReachedText title="12.500" desc="Games Available" />
          <ReachedSeparator />
          <ReachedText title="99,9%" desc="Happy Players" />
          <ReachedSeparator />
          <ReachedText title="4.7" desc="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
