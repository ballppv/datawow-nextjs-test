'use client'

import { ReactNode, useEffect, useState } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])

  if (isLoading) return <div className="bg-white w-full h-full"></div>

  return (
    <div className="bg-white">
      <div className="max-w-maximum-web min-h-[100vh] mx-auto">{children}</div>
    </div>
  )
}

export default MainLayout
