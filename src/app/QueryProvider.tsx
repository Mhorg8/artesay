"use client"
import React from 'react'
import {QueryClientProvider , QueryClient } from '@tanstack/react-query'

interface Props{
    children : React.ReactNode
}

const QueryProvider = ({children}:Props) => {
    const clientQuery = new QueryClient()
  return (
    <QueryClientProvider client={clientQuery}>{children}</QueryClientProvider>
  )
}

export default QueryProvider