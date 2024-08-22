import { Logo } from "@/components/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black h-screen px-6">
      <div className="grid grid-cols-1 h-full text-white md:grid-cols-2 grid-rows-1">
        <div className="hidden md:flex col-span-1 h-full">
          <div className="flex items-center justify-center flex-col w-full">
            <div className="flex gap-x-2">
              <Logo />
            </div>
            <div>{/* TODO: Add features */}</div>
          </div>
        </div>
        <div className="h-full flex items-center justify-center flex-col col-span-1">
          <h2 className="text-balance text-center mb-6 font-semibold text-xl max-w-sm">
            Welcome Back. Sign in or create your account to get access.
          </h2>
          {children}
        </div>
      </div>
    </div>
  );
}
