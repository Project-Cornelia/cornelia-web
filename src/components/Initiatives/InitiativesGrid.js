'use client'

import { useEffect, useRef, useState } from 'react'
import InitiativeCard from './InitiativeCard'

function buildRows(initiatives, expandedId) {
  const rows = []
  let pair = []

  for (const initiative of initiatives) {
    if (initiative.id === expandedId) {
      if (pair.length) rows.push(pair)
      rows.push([initiative])
      pair = []
      continue
    }

    pair.push(initiative)
    if (pair.length === 2) {
      rows.push(pair)
      pair = []
    }
  }

  if (pair.length) rows.push(pair)
  return rows
}

export default function InitiativesGrid({ initiatives = [] }) {
  const [expandedId, setExpandedId] = useState(null)
  const scrollTargetRef = useRef(null)

  useEffect(() => {
    if (!scrollTargetRef.current) return
    document
      .getElementById(scrollTargetRef.current)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    scrollTargetRef.current = null
  }, [expandedId])

  useEffect(() => {
    if (expandedId === null) return undefined

    const handleKeyDown = (event) => {
      if (event.key !== 'Escape') return
      scrollTargetRef.current = `initiative-${expandedId}`
      setExpandedId(null)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [expandedId])

  if (initiatives.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="font-body-md text-body-md text-on-surface-variant">
          No initiatives or events have been published yet.
        </p>
      </div>
    )
  }

  const handleToggle = (id) => {
    scrollTargetRef.current = `initiative-${id}`
    setExpandedId((current) => (current === id ? null : id))
  }

  const rows = buildRows(initiatives, expandedId)

  return (
    <div className="flex flex-col gap-stack-lg">
      {rows.map((row) => (
        <div
          key={row.map((initiative) => initiative.id).join('-')}
          className={`grid grid-cols-1 gap-stack-lg ${
            row[0].id === expandedId ? '' : 'md:grid-cols-2'
          }`}
        >
          {row.map((initiative) => (
            <InitiativeCard
              key={initiative.id}
              initiative={initiative}
              isExpanded={initiative.id === expandedId}
              onToggle={() => handleToggle(initiative.id)}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
