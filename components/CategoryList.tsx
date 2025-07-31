"use client"
import { Button } from '@/components/ui/button'

export function CategoryList({ categories, active, onClick }: {
  categories: string[]
  active: string
  onClick: (cat: string) => void
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2 py-4">
      {categories.map((cat) => (
        <Button
          key={cat}
          variant={active === cat ? 'default' : 'outline'}
          onClick={() => onClick(cat)}
        >
          {cat}
        </Button>
      ))}
    </div>
  )
}
