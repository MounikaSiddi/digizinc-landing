// components/AuthorCard.tsx
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6'

export default function AuthorCard() {
  return (
    <div className="bg-gray-700 text-white p-4 rounded-xl mt-10 flex gap-4 items-center">
      <div className="w-16 h-16 bg-gray-500 rounded-full" />
      <div className="flex-1">
        <p className="font-bold">NAME</p>
        <p className="text-sm">Detailed description what he does and his position</p>
        <div className="flex gap-2 mt-2">
          <FaXTwitter className="w-5 h-5" />
          <FaLinkedin className="w-5 h-5" />
        </div>
      </div>
    </div>
  )
}
