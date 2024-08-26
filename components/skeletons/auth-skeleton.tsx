import { Skeleton } from "@/components/ui/skeleton";

export const AuthSkeleton = () => {
  return (
    <div className="flex h-[400px] w-[400px] flex-col items-center justify-center gap-y-32 rounded-md bg-zinc-900 px-4 py-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};
