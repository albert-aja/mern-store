import UserProfile from './user-profile';
import SidebarFooter from './footer';
import MenuItem from './menu-item';

interface SidebarProps {
  activeMenu: 'overview' | 'transaction' | 'settings';
}

export default function sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <UserProfile />
        <div className="menus">
          <MenuItem
            icon="overview"
            text="Overview"
            link="/"
            active={activeMenu === 'overview'}
          />
          <MenuItem
            icon="transaction"
            text="Transactions"
            link="/member/transactions"
            active={activeMenu === 'transaction'}
          />
          <MenuItem icon="message" text="Messages" link="/member" />
          <MenuItem icon="card" text="Card" link="/member" />
          <MenuItem icon="rewards" text="Rewards" link="/member" />
          <MenuItem
            icon="settings"
            text="Settings"
            link="member/edit-profile"
            active={activeMenu === 'settings'}
          />
          <MenuItem icon="logout" text="Log Out" link="member/sign-in" />
        </div>
        <SidebarFooter />
      </div>
    </section>
  );
}
