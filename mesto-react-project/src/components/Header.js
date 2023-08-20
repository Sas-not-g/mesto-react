import logo from '../images/header.svg';

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="логотип Место" />
    </header>
  );
}
