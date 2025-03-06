import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-hidden p-4 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center text-center max-w-2xl w-full">
        <div className="flex flex-col items-center">
          <div className="w-32 sm:w-40 h-16 sm:h-20 relative mb-2 sm:mb-5">
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
          
          <div className="w-16 sm:w-20 h-16 sm:h-20 relative mb-2 sm:mb-4">
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMjUxLjYzIDUxMWMtMy4xIDAtNi4yLTEuMi04LjUtMy42cy0zLjYtNS40LTMuNi04LjUgMS4yLTYuMiAzLjYtOC41IDUuNC0zLjYgOC41LTMuNiA2LjIgMS4yIDguNSAzLjYgMy42IDUuNCAzLjYgOC41LTEuMiA2LjItMy42IDguNS01LjQgMy42LTguNSAzLjZ6TTExMS4wMyA0NzguMjZjLTMuMSAwLTYuMi0xLjItOC41LTMuNnMtMy42LTUuNC0zLjYtOC41IDEuMi02LjIgMy42LTguNSA1LjQtMy42IDguNS0zLjYgNi4yIDEuMiA4LjUgMy42IDMuNiA1LjQgMy42IDguNS0xLjIgNi4yLTMuNiA4LjUtNS40IDMuNi04LjUgMy42ek0zOTIuMjMgNDc4LjI2Yy0zLjEgMC02LjItMS4yLTguNS0zLjZzLTMuNi01LjQtMy42LTguNSAxLjItNi4yIDMuNi04LjUgNS40LTMuNiA4LjUtMy42IDYuMiAxLjIgOC41IDMuNiAzLjYgNS40IDMuNiA4LjUtMS4yIDYuMi0zLjYgOC41LTUuNCAzLjYtOC41IDMuNnpNMjUxLjYzIDQzNy40NmMtMy4xIDAtNi4yLTEuMi04LjUtMy42cy0zLjYtNS40LTMuNi04LjUgMS4yLTYuMiAzLjYtOC41IDUuNC0zLjYgOC41LTMuNiA2LjIgMS4yIDguNSAzLjYgMy42IDUuNCAzLjYgOC41LTEuMiA2LjItMy42IDguNS01LjQgMy42LTguNSAzLjZ6TTExMS4wMyA0MDQuNzNjLTMuMSAwLTYuMi0xLjItOC41LTMuNnMtMy42LTUuNC0zLjYtOC41IDEuMi02LjIgMy42LTguNSA1LjQtMy42IDguNS0zLjYgNi4yIDEuMiA4LjUgMy42IDMuNiA1LjQgMy42IDguNS0xLjIgNi4yLTMuNiA4LjUtNS40IDMuNi04LjUgMy42ek0xODEuMzMgNDE1LjA2Yy0zLjEgMC02LjItMS4yLTguNS0zLjZzLTMuNi01LjQtMy42LTguNSAxLjItNi4yIDMuNi04LjUgNS40LTMuNiA4LjUtMy42IDYuMiAxLjIgOC41IDMuNiAzLjYgNS40IDMuNiA4LjUtMS4yIDYuMi0zLjYgOC41LTUuNCAzLjYtOC41IDMuNnpNMzIxLjkzIDQxNS4wNmMtMy4xIDAtNi4yLTEuMi04LjUtMy42cy0zLjYtNS40LTMuNi04LjUgMS4yLTYuMiAzLjYtOC41IDUuNC0zLjYgOC41LTMuNiA2LjIgMS4yIDguNSAzLjYgMy42IDUuNCAzLjYgOC41LTEuMiA2LjItMy42IDguNS01LjQgMy42LTguNSAzLjZ6TTM5Mi4yMyA0MDQuNzNjLTMuMSAwLTYuMi0xLjItOC41LTMuNnMtMy42LTUuNC0zLjYtOC41IDEuMi02LjIgMy42LTguNSA1LjQtMy42IDguNS0zLjYgNi4yIDEuMiA4LjUgMy42IDMuNiA1LjQgMy42IDguNS0xLjIgNi4yLTMuNiA4LjUtNS40IDMuNi04LjUgMy42ek0xODEuMzMgMzQ5LjJ2LTIwYy01LjI5LTEuOTctMTAuNDQtNC4zMS0xNS40LTcuMDFsLTE0LjE0IDE0LjE0Yy03LjcyLTUuMTItMTQuNzUtMTEuMTMtMjEtMTcuNzhsLTUuNDYtNi4xOCAxNC4xNC0xNC4xNGMtMi43LTQuOTYtNS4wNC0xMC4xMS03LjAxLTE1LjRoLTIwYy0xLjU0LTcuMTItMi4zNC0xNC40Ni0yLjM2LTIxLjgzaDIwLjA0Yy4zMS0yLjY3LjcxLTUuMzMgMS4yMS03Ljk3LjUtMi42NSAxLjA5LTUuMjggMS44LTcuODdoLTIwLjA1Yy4wMS03LjM3LjgxLTE0LjcxIDIuMzUtMjEuODNoMjBjMS45Ny01LjI5IDQuMzEtMTAuNDQgNy4wMS0xNS40bC0xNC4xNC0xNC4xNGM1LjEyLTcuNzIgMTEuMTMtMTQuNzUgMTcuNzgtMjFsNi4xOC01LjQ2IDE0LjE0IDE0LjE0YzQuOTYtMi43IDEwLjExLTUuMDQgMTUuNC03LjAxdi0yMGM3LjEyLTEuNTQgMTQuNDYtMi4zNCAyMS44My0yLjM2djIwLjA0YzIuNjcuMzEgNS4zMy43MSA3Ljk3IDEuMjEgMi42NS41IDUuMjggMS4wOSA3Ljg3IDEuOHYtMjAuMDVjNy4zNy4wMSAxNC43MS44MSAyMS44MyAyLjM1aDAgMHYyMGM1LjI5IDEuOTcgMTAuNDQgNC4zMSAxNS40IDcuMDFsMTQuMTQtMTQuMTRjNy43MiA1LjEyIDE0Ljc1IDExLjEzIDIxIDE3Ljc4bDUuNDYgNi4xOC0xNC4xNCAxNC4xNGMyLjcgNC45NiA1LjA0IDEwLjExIDcuMDEgMTUuNGgyMGMxLjU0IDcuMTIgMi4zNCAxNC40NiAyLjM2IDIxLjgzaC0yMC4wNGMtLjMxIDIuNjctLjcxIDUuMzMtMS4yMSA3Ljk3LS41IDIuNjUtMS4wOSA1LjI4LTEuOCA3Ljg3aDIwLjA1Yy0uMDEgNy4zNy0uODEgMTQuNzEtMi4zNSAyMS44M2gtMjBjLTEuOTcgNS4yOS00LjMxIDEwLjQ0LTcuMDEgMTUuNGwxNC4xNCAxNC4xNGMtNS4xMiA3LjcyLTExLjEzIDE0Ljc1LTE3Ljc4IDIxbC02LjE4IDUuNDYtMTQuMTQtMTQuMTRjLTQuOTYgMi43LTEwLjExIDUuMDQtMTUuNCA3LjAxdjIwYy03LjEyIDEuNTQtMTQuNDYgMi4zNC0yMS44MyAyLjM2di0yMC4wNGMtMi42Ny0uMzEtNS4zMy0uNzEtNy45Ny0xLjIxLTIuNjUtLjUtNS4yOC0xLjA5LTcuODctMS44djIwLjA1Yy03LjM3LS4wMS0xNC43MS0uODEtMjEuODMtMi4zNXptMTAuMyA3My4zdjMyaDExMHYtMzJ6Ii8+PC9zdmc+"
              alt="Construction Icon"
              fill
              style={{ objectFit: "contain" }}
              className="dark:invert"
            />
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-3">Website Maintenance</h1>
          
          <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4 max-w-md">
            We are currently maintaining our website and will be back soon. In the meantime, please check our social media links below for updates.
          </p>
          
          <div className="w-12 sm:w-16 h-px sm:h-0.5 bg-black/10 dark:bg-white/20 rounded-full mb-2 sm:mb-3"></div>
          
          <p className="text-xs sm:text-sm opacity-70 font-[family-name:var(--font-geist-mono)] mb-3 sm:mb-4">
            We appreciate your patience
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-xs sm:text-sm h-8 sm:h-9 md:h-10 px-3 sm:px-4"
            href="mailto:contact@icog-labs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
          
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-1 sm:mt-2">
            {/* <a
              href="https://web.facebook.com/icogacc?_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Facebook"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={18}
                height={18}
                className="transition-all facebook-icon w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px]"
              />
            </a> */}
            
            <a
              href="https://x.com/icog__"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="X (formerly Twitter)"
            >
              <Image
                src="/icons/x.svg"
                alt="X (formerly Twitter)"
                width={18}
                height={18}
                className="transition-all x-icon w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px]"
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
                width={18}
                height={18}
                className="transition-all linkedin-icon w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px]"
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
                width={18}
                height={18}
                className="transition-all instagram-icon w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px]"
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
                width={18}
                height={18}
                className="transition-all youtube-icon w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px]"
              />
            </a>
            
            <a
              href="https://www.tiktok.com/@icog__"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="TikTok"
            >
              <Image
                src="/icons/tiktokk.svg"
                alt="TikTok"
                width={18}
                height={18}
                className="transition-all tiktok-icon w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px]"
              />
            </a>
          </div>
        </div>
      </main>
      
      <footer className="text-[10px] sm:text-xs text-center opacity-40 mt-auto pt-1 sm:pt-2">
        &copy; {new Date().getFullYear()} iCog Labs. All rights reserved.
      </footer>
    </div>
  );
}
