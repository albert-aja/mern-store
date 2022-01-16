import Logo from '../../atoms/logo';
import Header from './header';
import List from './list';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Logo />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br />
                {' '}
                untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <Header text="Company" />
                  <List
                    contents={[
                      { link: '#', text: 'About Us' },
                      { link: '#', text: 'Press Release' },
                      { link: '#', text: 'Terms of Use' },
                      { link: '#', text: 'Privacy Policy' },
                    ]}
                  />
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <Header text="Support" />
                  <List
                    contents={[
                      { link: '#', text: 'Refund Policy' },
                      { link: '#', text: 'Unlock Rewards' },
                      { link: '#', text: 'Live Chatting' },
                    ]}
                  />
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <Header text="Connect" />
                  <List
                    contents={[
                      { link: 'mailto: hi@store.gg', text: 'hi@store.gg' },
                      { link: 'mailto: team@store.gg', text: 'team@store.gg' },
                      {
                        link: 'http://maps.google.com/?q=Pasific 12, Jakarta Selatan',
                        text: 'Pasific 12, Jakarta Selatan',
                      },
                      { link: 'tel: 02111229090', text: '021 - 1122 - 9090' },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
