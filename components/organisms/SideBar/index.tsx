import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";


interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}

export default function SideBar(props: SidebarProps) {
  const {activeMenu} = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem href="/member" title="Overview" active={activeMenu === 'overview'} />
          <MenuItem href="/member/transactions" active={activeMenu === 'transactions'} title="Transactions" />
          <MenuItem href="/member" title="Messages" />
          <MenuItem href="/member" title="Card" />
          <MenuItem href="/member" title="Rewards" />
          <MenuItem href="/member/edit-profile" title="Settings" active={activeMenu === 'settings'} />
          <MenuItem href="/sign-in" title="Logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
