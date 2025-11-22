'use client'

import { ResponsiveDialog } from '@/components/responsive-dialog'
import { Button } from '@/components/ui/button'
import { PlusIcon, XCircleIcon } from 'lucide-react'
import { useState } from 'react'
import { AgentForm } from './agent-form'
import { SearchFilter } from './agents-search-filter'
import { useAgentsFilters } from '../../hooks/use-agents-filters'

export const AgentsListHeader = () => {
  const [open, setOpen] = useState(false)
  const [filters, setFilters] = useAgentsFilters()

  const hasFilters = !!filters.search

  const handleClearAllFilters = () => {
    setFilters({
      search: '',
    })
  }

  return (
    <>
      <div className="flex items-center justify-between py-6">
        <h2 className="text-2xl font-semibold">My Agents</h2>
        <Button onClick={() => setOpen(true)}>
          <PlusIcon />
          New Agent
        </Button>
      </div>
      <div className="flex items-center gap-3 mb-5">
        <SearchFilter />
        {hasFilters && (
          <Button variant="outline" onClick={handleClearAllFilters}>
            <XCircleIcon />
            Clear
          </Button>
        )}
      </div>
      <ResponsiveDialog
        title="New Agent"
        description="Create a new agent"
        open={open}
        onOpenChange={setOpen}
      >
        <AgentForm
          onCancel={() => setOpen(false)}
          onSuccess={() => setOpen(false)}
        />
      </ResponsiveDialog>
    </>
  )
}
