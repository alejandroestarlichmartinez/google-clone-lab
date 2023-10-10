// components
import { SearchHeader } from "@/components/";
// styles
import "./../globals.scss";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <SearchHeader />
      {children}
      {/* Footer */}
    </div>
  );
}