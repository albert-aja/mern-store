import UserProfile from './user-profile';
import SidebarFooter from './footer';
import MenuItem from './menu-item';

export default function sidebar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <UserProfile />
        <div className="menus">
          <MenuItem icon="overview" text="Overview" active />
          <MenuItem icon="transaction" text="Transactions" />
          <MenuItem icon="message" text="Messages" />
          <MenuItem icon="card" text="Card" />
          <MenuItem icon="rewards" text="Rewards" />
          <MenuItem icon="settings" text="Settings" />
          <MenuItem icon="logout" text="Log Out" />
        </div>
        <SidebarFooter />
      </div>
    </section>
  );
}
