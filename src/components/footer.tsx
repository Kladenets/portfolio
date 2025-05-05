export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-4 text-center text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <p>&copy; {currentYear} Kyle Kent. All rights reserved.</p>
      {/* Add links to GitHub, LinkedIn etc. if desired */}
    </footer>
  );
}