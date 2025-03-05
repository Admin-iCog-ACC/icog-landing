import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center max-w-2xl">
        <div className="flex flex-col items-center">
          <div className="w-48 h-24 relative mb-6">
            <Image
              src="/icogwhite.png"
              alt="iCog Logo"
              fill
              style={{ objectFit: "contain" }}
              className="hidden dark:block"
            />
            <Image
              src="/icog.png"
              alt="iCog Logo"
              fill
              style={{ objectFit: "contain" }}
              className="block dark:hidden"
            />
          </div>
          
          <div className="w-24 h-24 relative mb-6">
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMjUxLjYzIDUxMWMtMy4xIDAtNi4yLTEuMi04LjUtMy42cy0zLjYtNS40LTMuNi04LjUgMS4yLTYuMiAzLjYtOC41IDUuNC0zLjYgOC41LTMuNiA2LjIgMS4yIDguNSAzLjYgMy42IDUuNCAzLjYgOC41LTEuMiA2LjItMy42IDguNS01LjQgMy42LTguNSAzLjZ6TTExMS4wMyA0NzguMjZjLTMuMSAwLTYuMi0xLjItOC41LTMuNnMtMy42LTUuNC0zLjYtOC41IDEuMi02LjIgMy42LTguNSA1LjQtMy42IDguNS0zLjYgNi4yIDEuMiA4LjUgMy42IDMuNiA1LjQgMy42IDguNS0xLjIgNi4yLTMuNiA4LjUtNS40IDMuNi04LjUgMy42ek0zOTIuMjMgNDc4LjI2Yy0zLjEgMC02LjItMS4yLTguNS0zLjZzLTMuNi01LjQtMy42LTguNSAxLjItNi4yIDMuNi04LjUgNS40LTMuNiA4LjUtMy42IDYuMiAxLjIgOC41IDMuNiAzLjYgNS40IDMuNiA4LjUtMS4yIDYuMi0zLjYgOC41LTUuNCAzLjYtOC41IDMuNnpNMjUxLjYzIDQzNy40NmMtMy4xIDAtNi4yLTEuMi04LjUtMy42cy0zLjYtNS40LTMuNi04LjUgMS4yLTYuMiAzLjYtOC41IDUuNC0zLjYgOC41LTMuNiA2LjIgMS4yIDguNSAzLjYgMy42IDUuNCAzLjYgOC41LTEuMiA2LjItMy42IDguNS01LjQgMy42LTguNSAzLjZ6TTExMS4wMyA0MDQuNzNjLTMuMSAwLTYuMi0xLjItOC41LTMuNnMtMy42LTUuNC0zLjYtOC41IDEuMi02LjIgMy42LTguNSA1LjQtMy42IDguNS0zLjYgNi4yIDEuMiA4LjUgMy42IDMuNiA1LjQgMy42IDguNS0xLjIgNi4yLTMuNiA4LjUtNS40IDMuNi04LjUgMy42ek0xODEuMzMgNDE1LjA2Yy0zLjEgMC02LjItMS4yLTguNS0zLjZzLTMuNi01LjQtMy42LTguNSAxLjItNi4yIDMuNi04LjUgNS40LTMuNiA4LjUtMy42IDYuMiAxLjIgOC41IDMuNiAzLjYgNS40IDMuNiA4LjUtMS4yIDYuMi0zLjYgOC41LTUuNCAzLjYtOC41IDMuNnpNMzIxLjkzIDQxNS4wNmMtMy4xIDAtNi4yLTEuMi04LjUtMy42cy0zLjYtNS40LTMuNi04LjUgMS4yLTYuMiAzLjYtOC41IDUuNC0zLjYgOC41LTMuNiA2LjIgMS4yIDguNSAzLjYgMy42IDUuNCAzLjYgOC41LTEuMiA2LjItMy42IDguNS01LjQgMy42LTguNSAzLjZ6TTM5Mi4yMyA0MDQuNzNjLTMuMSAwLTYuMi0xLjItOC41LTMuNnMtMy42LTUuNC0zLjYtOC41IDEuMi02LjIgMy42LTguNSA1LjQtMy42IDguNS0zLjYgNi4yIDEuMiA4LjUgMy42IDMuNiA1LjQgMy42IDguNS0xLjIgNi4yLTMuNiA4LjUtNS40IDMuNi04LjUgMy42ek0xODEuMzMgMzQ5LjJ2LTIwYy01LjI5LTEuOTctMTAuNDQtNC4zMS0xNS40LTcuMDFsLTE0LjE0IDE0LjE0Yy03LjcyLTUuMTItMTQuNzUtMTEuMTMtMjEtMTcuNzhsLTUuNDYtNi4xOCAxNC4xNC0xNC4xNGMtMi43LTQuOTYtNS4wNC0xMC4xMS03LjAxLTE1LjRoLTIwYy0xLjU0LTcuMTItMi4zNC0xNC40Ni0yLjM2LTIxLjgzaDIwLjA0Yy4zMS0yLjY3LjcxLTUuMzMgMS4yMS03Ljk3LjUtMi42NSAxLjA5LTUuMjggMS44LTcuODdoLTIwLjA1Yy4wMS03LjM3LjgxLTE0LjcxIDIuMzUtMjEuODNoMjBjMS45Ny01LjI5IDQuMzEtMTAuNDQgNy4wMS0xNS40bC0xNC4xNC0xNC4xNGM1LjEyLTcuNzIgMTEuMTMtMTQuNzUgMTcuNzgtMjFsNi4xOC01LjQ2IDE0LjE0IDE0LjE0YzQuOTYtMi43IDEwLjExLTUuMDQgMTUuNC03LjAxdi0yMGM3LjEyLTEuNTQgMTQuNDYtMi4zNCAyMS44My0yLjM2djIwLjA0YzIuNjcuMzEgNS4zMy43MSA3Ljk3IDEuMjEgMi42NS41IDUuMjggMS4wOSA3Ljg3IDEuOHYtMjAuMDVjNy4zNy4wMSAxNC43MS44MSAyMS44MyAyLjM1aDAgMHYyMGM1LjI5IDEuOTcgMTAuNDQgNC4zMSAxNS40IDcuMDFsMTQuMTQtMTQuMTRjNy43MiA1LjEyIDE0Ljc1IDExLjEzIDIxIDE3Ljc4bDUuNDYgNi4xOC0xNC4xNCAxNC4xNGMyLjcgNC45NiA1LjA0IDEwLjExIDcuMDEgMTUuNGgyMGMxLjU0IDcuMTIgMi4zNCAxNC40NiAyLjM2IDIxLjgzaC0yMC4wNGMtLjMxIDIuNjctLjcxIDUuMzMtMS4yMSA3Ljk3LS41IDIuNjUtMS4wOSA1LjI4LTEuOCA3Ljg3aDIwLjA1Yy0uMDEgNy4zNy0uODEgMTQuNzEtMi4zNSAyMS44M2gtMjBjLTEuOTcgNS4yOS00LjMxIDEwLjQ0LTcuMDEgMTUuNGwxNC4xNCAxNC4xNGMtNS4xMiA3LjcyLTExLjEzIDE0Ljc1LTE3Ljc4IDIxbC02LjE4IDUuNDYtMTQuMTQtMTQuMTRjLTQuOTYgMi43LTEwLjExIDUuMDQtMTUuNCA3LjAxdjIwYy03LjEyIDEuNTQtMTQuNDYgMi4zNC0yMS44MyAyLjM2di0yMC4wNGMtMi42Ny0uMzEtNS4zMy0uNzEtNy45Ny0xLjIxLTIuNjUtLjUtNS4yOC0xLjA5LTcuODctMS44djIwLjA1Yy03LjM3LS4wMS0xNC43MS0uODEtMjEuODMtMi4zNXptMTAuMyA3My4zdjMyaDExMHYtMzJ6Ii8+PC9zdmc+"
              alt="Construction Icon"
              fill
              style={{ objectFit: "contain" }}
              className="dark:invert"
            />
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Website Maintenance</h1>
          
          <p className="text-xl mb-8 max-w-md">
            We are currently maintaining our website and will be back soon. In the meantime, please check our social media links below for updates.
          </p>
          
          <div className="w-24 h-1 bg-black/10 dark:bg-white/20 rounded-full mb-8"></div>
          
          <p className="text-sm opacity-70 font-[family-name:var(--font-geist-mono)]">
            We appreciate your patience
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="mailto:hr@icog.et"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
          
          <div className="flex items-center justify-center gap-6 mt-4">
            <a
              href="https://web.facebook.com/icogacc?_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Facebook"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
                className="transition-all facebook-icon"
              />
            </a>
            
            <a
              href="https://x.com/icog__"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="X (formerly Twitter)"
            >
              <Image
                src="/icons/twitter.svg"
                alt="X (formerly Twitter)"
                width={24}
                height={24}
                className="transition-all x-icon"
              />
            </a>
            
            <a
              href="https://www.linkedin.com/company/icoga"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="LinkedIn"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="transition-all linkedin-icon"
              />
            </a>
            
            <a
              href="https://www.instagram.com/icog__"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Instagram"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="transition-all instagram-icon"
              />
            </a>
            
            <a
              href="https://www.youtube.com/@iCog-0"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="YouTube"
            >
              <Image
                src="/icons/youtube.svg"
                alt="YouTube"
                width={24}
                height={24}
                className="transition-all youtube-icon"
              />
            </a>
            
            <a
              href="https://www.tiktok.com/@icog___"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="TikTok"
            >
              <Image
                src="/icons/tiktokk.svg"
                alt="TikTok"
                width={24}
                height={24}
                className="transition-all tiktok-icon"
              />
            </a>
          </div>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm opacity-70">© 2025 All Rights Reserved. iCog.</p>
      </footer>
    </div>
  );
}
