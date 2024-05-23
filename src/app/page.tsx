import { connect } from '@/db-config/db.config'

connect()

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="text-2xl">
        <h1>Welcome to TrueSplit</h1>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">

      </div>
    </main>
  );
}
