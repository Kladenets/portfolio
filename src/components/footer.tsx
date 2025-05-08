export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-4 text-center text-sm text-text/90 bg-text/5 border-t border-text/30 my-transition-colors">
      <p>&copy; {currentYear} Kyle Kent. All rights reserved.</p>
      {/* Add links to GitHub, LinkedIn etc. if desired */}
    </footer>
  );
}
