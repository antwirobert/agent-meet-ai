import { cn } from '@/lib/utils'
import { Loader2Icon } from 'lucide-react'

export const LoadingState = ({
  title,
  className,
  description,
}: {
  title: string
  className?: string
  description?: string
}) => {
  return (
    <div className={cn('flex flex-col items-center gap-5', className)}>
      <Loader2Icon className="size-15 animate-spin text-primary" />
      <p className="font-semibold animate-pulse">{title}</p>
      <p>{description}</p>
    </div>
  )
}
