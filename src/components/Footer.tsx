export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Neel Joshi. All rights reserved.</p>
        <p>Built with passion & modern tech.</p>
      </div>
    </footer>
  );
}
