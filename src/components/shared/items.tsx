import { FlashItemsProps } from "@/library/types/general";

export default function Items({ children }: FlashItemsProps) {
  return (
    <div className="relative flex items-center gap-2 before:content-[''] before:block before:bg-[#DB4444] before:h-10 mt-10 before:rounded-md before:w-5 font-poppins">
      <div className="text-[#DB4444] font-semibold">{children}</div>
    </div>
  );
}
