import DashboardSidebar from "./dashboard/dashboard-sidebar";
import DashboardContent from "./dashboard/dashboard-content";

export default function DashboardLayout({ children }) {
  console.log(children);
  return (
    <main class="bg-gray-100 font-family-karla flex">
      <DashboardSidebar />
      <DashboardContent>{children}</DashboardContent>
    </main>
  );
}
