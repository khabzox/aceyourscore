import * as React from "react";
import { cn } from "@/libs/utils";

const Input = React.forwardRef(({ className, placeholder, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "flex h-10 w-full rounded-md border border-accent bg-primary px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    ref={ref}
    placeholder={placeholder}
    {...props}
  />
));
Input.displayName = "Input";

const SearchInput = React.forwardRef(({ className, placeholder, type, icon: Icon, onSearch, ...props }, ref) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch();
    }
  };

  return (
    <div className="relative flex items-center">
      {Icon && (
        <button
          type="button"
          className="absolute left-3 flex items-center"
          onClick={onSearch}
        >
          <Icon className="text-accent" />
        </button>
      )}
      <Input
        type={type}
        className={cn(
          "flex h-10 w-full pl-10 pr-4 rounded-md border-2 border-accent bg-primary px-10 py-2 text-sm ring-offset-background placeholder:text-accent-TextHover file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-TextHover focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        {...props}
      />
    </div>
  );
});

SearchInput.displayName = "SearchInput";

export { Input, SearchInput };
