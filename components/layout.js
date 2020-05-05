import Header from "./header";

import styles from "./layout.module.css";

console.log(styles);

export default function Layout({ children }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
