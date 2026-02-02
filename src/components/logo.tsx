import Image from 'next/image'

function Logo() {
	return (
		<div>
			<Image src="/image/logo.png" alt='logo' width={200} height={26} />
		</div>
	)
}

export default Logo
