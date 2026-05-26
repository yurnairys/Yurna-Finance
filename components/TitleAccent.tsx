/** Resalta palabras clave en títulos con el color de acción de marca */
export function TitleAccent({
  children,
  variant = 'default',
}: {
  children: React.ReactNode
  variant?: 'default' | 'on-dark'
}) {
  return (
    <span
      className={
        variant === 'on-dark' ? 'text-white font-semibold' : 'text-brand-blue font-semibold'
      }
    >
      {children}
    </span>
  )
}
