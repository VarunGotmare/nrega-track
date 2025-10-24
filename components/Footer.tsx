export default function Footer() {
  return (
    <footer className="py-4 text-center text-gray-600 border-t border-gray-200 w-full bg-white">
      <p>
        © {new Date().getFullYear()} NREGA Track — Empowering citizens with open data.
      </p>
    </footer>
  );
}
