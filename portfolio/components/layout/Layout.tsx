import layout from "../../styles/layout.module.scss";
type LayoutProps = {
  children: any;
};
const Layout = ({ children }: LayoutProps) => {
  return <div className={layout.container}>{children}</div>;
};

export default Layout;
