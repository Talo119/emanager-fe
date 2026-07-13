import type { InputHTMLAttributes, ReactNode } from 'react'

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  children?: ReactNode
}

export function FormField({
  label,
  error,
  id,
  children,
  ...inputProps
}: FormFieldProps) {
  const fieldId = id ?? inputProps.name

  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      {children ?? (
        <input
          id={fieldId}
          className={`input input-bordered w-full ${error ? 'input-error' : ''}`}
          {...inputProps}
        />
      )}
      {error ? (
        <div className="label">
          <span className="label-text-alt text-error">{error}</span>
        </div>
      ) : null}
    </label>
  )
}
