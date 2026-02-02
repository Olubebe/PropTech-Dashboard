import { Briefcase, Users } from 'lucide-react'

function UsersContent() {
	return (
      <div>
        <main className="px-6 py-6">
          <h1 className="text-3xl font-bold mb-6">Users</h1>
          <div className="bg-white rounded-lg p-8 text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600">
              Users content will be displayed here
            </p>
          </div>
        </main>
      </div>
	)
}

export default UsersContent

