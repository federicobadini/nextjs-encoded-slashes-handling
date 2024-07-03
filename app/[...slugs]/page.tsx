export default function Page({ params }: { params: { slugs: string[] } }) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{JSON.stringify(params.slugs)}
		</main>
	);
}
