'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function UrlInput() {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (url.trim()) {
      setIsLoading(true)
      router.push(`/download?url=${encodeURIComponent(url)}`)
    }
  }

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="flex space-x-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Input
        type="text"
        placeholder="Paste YouTube video URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="flex-grow"
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <motion.div
            className="w-5 h-5 border-t-2 border-blue-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        ) : (
          <Download className="w-5 h-5" />
        )}
        <span className="ml-2">Get Video</span>
      </Button>
    </motion.form>
  )
}