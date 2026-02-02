import { FileText, } from 'lucide-react'

function RequestContent() {
	return (
			<div>
        <main className="px-6 py-6">
          <h1 className="text-3xl font-bold mb-6">Request</h1>
          <div className="bg-white rounded-lg p-8 text-center">
            <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600">
              Request content will be displayed here
            </p>
          </div>
        </main>
			</div>
	)
}

export default RequestContent

