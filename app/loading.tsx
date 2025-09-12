import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="relative w-32 h-32">
        <Image
          src="/digizinc-header-logo-dark.png"
          alt="Digizinc Logo"
          width={128}
          height={128}
          className="animate-pulse"
        />
      </div>
    </div>
  );
}