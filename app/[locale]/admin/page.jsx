import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function AdminPage() {
  return (
    <>
    <div>AdminPage  </div>
    <Link href="/admin/articles" className='text-white'><Button>Articles Page</Button></Link>
    </>
  )
}
