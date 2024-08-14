import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-muted/40 py-6">
      <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">&copy; 2023 CineFlix. All rights reserved.</div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="#" className="hover:text-primary" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-primary" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-primary" prefetch={false}>
            Help Center
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
