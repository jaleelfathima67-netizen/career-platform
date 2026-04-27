import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="text-sm font-medium text-foreground block">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 rounded-md border border-border bg-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all ${error ? 'border-red-500' : 'focus:border-brand'} ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({ label, error, className = '', ...props }: TextareaProps) {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="text-sm font-medium text-foreground block">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-3 rounded-md border border-border bg-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all min-h-[120px] resize-y ${error ? 'border-red-500' : 'focus:border-brand'} ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
}
