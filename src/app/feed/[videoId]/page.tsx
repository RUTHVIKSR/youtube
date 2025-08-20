interface PageProps {
    params: Promise<{
        videoId: string;
    }>;
}

const page = async({ params }: PageProps) => {
    const { videoId } = await params;
    return (
        <div>
            <h1>Video Page</h1>
            <p>Video ID: {videoId}</p>
        </div>
    )
}

export default page;