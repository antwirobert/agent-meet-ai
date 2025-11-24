'use client'

import { useTRPC } from '@/trpc/client'
import { useSuspenseQuery } from '@tanstack/react-query'
import { ErrorState } from '@/components/error-state'
import CallProvider from '../components/call-provider'

interface Props {
  meetingId: string
}

const CallView = ({ meetingId }: Props) => {
  const trpc = useTRPC()
  const { data } = useSuspenseQuery(
    trpc.meetings.getOne.queryOptions({ id: meetingId })
  )

  if (data.status === 'completed') {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <ErrorState
          title="Meeting has ended"
          description="You can no longer join this meeting"
          className="bg-background py-10 px-4 rounded-lg"
        />
      </div>
    )
  }

  return <CallProvider meetingId={meetingId} meetingName={data.name} />
}

export default CallView
