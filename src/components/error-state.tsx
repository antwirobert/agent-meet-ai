import { cn } from '@/lib/utils'
import { AlertCircleIcon } from 'lucide-react'

export const ErrorState = ({
  title,
  description,
  className,
}: {
  title: string
  description: string
  className?: string
}) => {
  return (
    <div className={cn('flex flex-col items-center gap-5', className)}>
      <div className="flex items-center gap-3">
        <AlertCircleIcon className="text-red-500 size-6" />
        <h3 className="font-semibold text-2xl">{title}</h3>
      </div>
      <p className="font-semibold animate-pulse">{description}</p>
    </div>
  )
}
