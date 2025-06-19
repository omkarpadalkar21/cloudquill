import Link from "next/link";

export default function Home() {
    return (
        <div className={'min-h-screen flex items-center justify-center'}><p>Click <Link
            href={"documents/123"} className={"text-blue-600"}> here </Link> to go to document id</p></div>
    );
}
